const {google} = require('googleapis')
import fs from 'fs'
import { User, Group } from '../db/schema';
import {oAuth2Client} from './login';
export default router => {
    router.get("/calendars", (req, res) => {
        ensureLogin(req,res, async () =>{
            const user = await User.findOne({'googleId': req.session.user.id});
            oAuth2Client.setCredentials(user.token);
            var calendar = google.calendar({version:'v3', auth:oAuth2Client});
            calendar.calendarList.list((err,result)=>{
                const calendarItems = result.data.item.map( (item) => ({
                    id:item.id,
                    name:item.summary,
                }));
                res.json({calendars:calendarItems});
            })
        });
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
    const isMember = await Group.find({ "_id": req.params.id, "members": req.session.user.id });
    if (isMember) {
        next();
    } else {
        return res.sendStatus(401);
    }
}