import express from 'express';
import { User, Group } from '../db/schema';
import mongooseCrudify from 'mongoose-crudify';

const router = express.Router();

router.use('/groups', mongooseCrudify({
    Model: Group, 

    beforeActions: [
        {
            middlewares: [ensureLogin]
        },
        {
            middlewares: [isMember],
            except: ['create']
        }
    ], 
    actions: {
        read: (req, res) => {
            Group.populate(req.crudify.group, 'members').then(() => res.json(req.crudify.group));
        }
    },
    afterActions: [
        {
            middlewares: [logToConsole]
        }
    ]
}));

function ensureLogin(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        return res.sendStatus(401);
    }
}

function isMember(req, res, next) {
    const isMember = Group.find({}).populate({
        path: 'members',
        match: { googleId: req.session.user.id }
    }).exec();
    if (isMember) {
        next();
    } else {
        return res.sendStatus(401);
    }
}

function logToConsole(req, res, next) {
    console.log(req.crudify.err || req.crudify.result);
    next();
}

export default router;

