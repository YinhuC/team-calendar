import express from 'express';
import { User, Group } from '../db/schema';
import mongooseCrudify from 'mongoose-crudify';

const router = express.Router();

router.use('/groups', mongooseCrudify({
    Model: Group, 

    beforeActions: [
        {
            middlewares: [ensureLogin]
        }
    ]
}));

function ensureLogin(req, res) {
    if (req.session.user) {
        next();
    } else {
        return res.sendStatus(401);
    }
}

