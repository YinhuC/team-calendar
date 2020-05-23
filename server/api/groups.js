import { User, Group } from '../db/schema';
import mongooseCrudify from 'mongoose-crudify';
import {oAuth2Client} from './login'
import { google } from 'googleapis';
import calendars from './calendars';

export default router => {
    router.use('/groups', mongooseCrudify({
        Model: Group, 

        beforeActions: [
            {
                middlewares: [ensureLogin]
            },
            {
                middlewares: [isMember],
                except: ['create', 'list']
            }
        ], 
        actions: {
            list: async (req, res) => {
                const groups = await Group.find({ "members": req.session.user.id });
                res.json(groups);
            },
            create: async (req, res) => {
                const newGroup = new Group(req.body);
                const user = await User.findOne({'googleId': req.session.user.id});
                oAuth2Client.setCredentials(user.token);
                var calendar = google.calendar({version:'v3', auth:oAuth2Client});
                const newCalendar = await calendar.calendars.insert({requestBody:{summary:req.body.name,description:req.body.description}});
                newGroup.groupCalendar = newCalendar.data.id;
                newGroup.members.push(req.session.user.id);
                newGroup.save();
                res.json(newGroup);
            },
            update: async (req, res) => {
                const user = await User.findOne({ "email": req.body.email });
                if (!user) {
                    res.sendStatus(404);
                } else {
                    const group = await Group.findById(req.params._id);
                    const owner = await User.findOne({ "googleId": group.members[0] });
                    oAuth2Client.setCredentials(owner.token);
                    var calendar = google.calendar({version:'v3', auth:oAuth2Client});
                    await calendar.acl.insert({
                        calendarId:group.groupCalendar,
                        requestBody:{role:'owner',scope:{type:'user',value:req.body.email}}})
                    oAuth2Client.setCredentials(user.token);
                    console.log('Added User!');
                    var newCalendar = google.calendar({version:'v3', auth:oAuth2Client});
                    await newCalendar.calendarList.insert({requestBody:{id:group.groupCalendar}});
                    console.log('Added Calendar!');
                    await Group.update(
                        { "_id": req.params._id },
                        { $addToSet: { "members": user.googleId } }
                    );
                    res.sendStatus(200);
                }
            },
            delete: async (req, res) => {
                const group = await Group.findById(req.params._id);
                await Group.deleteOne({ "_id": req.params._id });
                res.sendStatus(200);
                const user = await User.findOne({ 'googleId': req.session.user.id });
                oAuth2Client.setCredentials(user.token);
                const calendar = google.calendar({version:'v3', auth:oAuth2Client});
                await calendar.calendars.delete({
                    calendarId: group.groupCalendar 
                });
                console.log('Group has been removed successfully!');
            }
        },
    }));
    router.get('/groups/:_id/members', (req, res) => {
        ensureLogin(req,res,async () => {
            isMember(req, res, async  () =>{
                const group = await Group.findOne({ "_id": req.params._id });
                const users =  await User.find({ "googleId": {$in: group.members}});
                res.json({memberMap: users.map(user =>({googleId:user.googleId,firstName:user.firstName}))});
            })
        })
    });
    router.delete('/groups/:_id/members/:userid', (req, res) => {
        ensureLogin(req, res, async () => {
            isMember(req, res, async () => {
                const group = await Group.findOne({ "_id": req.params._id });
                group.members = group.members.filter(member => member !== req.params.userid);
                group.calendars = group.calendars.filter(calendar => calendar.googleId !== req.params.userid);
                const user = await User.findOne({ 'googleId': req.session.user.id });
                const userToRemove = await User.findOne({'googleId': req.params.userid});
                oAuth2Client.setCredentials(user.token);
                const calendar = google.calendar({version:'v3', auth:oAuth2Client});
                const rules = await calendar.acl.list({
                    calendarId: group.groupCalendar
                });
                const aclId = rules.data.items.find(rule => rule.scope.value === userToRemove.email).id;
                await calendar.acl.delete({
                    calendarId: group.groupCalendar,
                    ruleId: aclId,
                });
                group.save();
                res.sendStatus(200);
                console.log("Member has been removed from the group successfully!")
            })
        })
    })
}

async function ensureLogin(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        return res.sendStatus(401);
    }
}

async function isMember(req, res, next) {
    const isMember = await Group.find({ "_id": req.params._id, "members": req.session.user.id });
    if (isMember) {
        next();
    } else {
        return res.sendStatus(401);
    }
}