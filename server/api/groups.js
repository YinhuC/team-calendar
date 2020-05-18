import { User, Group } from '../db/schema';
import mongooseCrudify from 'mongoose-crudify';

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
            create: (req, res) => {
                const newGroup = new Group(req.body);
                newGroup.members.push(req.session.user.id);
                newGroup.save();
                res.json(newGroup);
            },
            update: async (req, res) => {
                const user = await User.findOne({"email": req.body.email });
                console.log(user.googleId);
                console.log(req.params);
                const group = await Group.findOne({ "_id": req.params._id });
                group.members.push(user.googleId);
                group.save();
                res.json(group);
            }
        },
        afterActions: [
            {
                middlewares: [logToConsole]
            }
        ]
    }));
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