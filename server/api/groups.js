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
                    await Group.update(
                        { "_id": req.params._id },
                        { $addToSet: { "members": user.googleId } }
                    );
                    res.sendStatus(200);
                }
            }
        },
        afterActions: [
            {
                middlewares: [logToConsole]
            }
        ]
    }));
    router.get('/members/:_id', (req, res) => {
        ensureLogin(req,res,async () => {
            isMember(req, res, async  () =>{
                const group = await Group.findOne({ "_id": req.params._id });
                const users =  await User.find({ "googleId": {$in: group.members}});
                res.json({memberMap: users.map(user =>({googleId:user.googleId,firstName:user.firstName}))});
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

async function logToConsole(req, res, next) {
    console.log(req.crudify.err || req.crudify.result);
    next();
}