const {google} = require('googleapis')
import fs from 'fs'

const cred = JSON.parse(fs.readFileSync('./credentials.json'))
const authScope = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/calendar.readonly',
]
const oAuth2Client = new google.auth.OAuth2(
    cred.web.client_id,
    cred.web.client_secret,
    cred.web.redirect_uris[0]
);
export default router => {
    router.get("/login", (req, res) => {
        const authUrl = oAuth2Client.generateAuthUrl({access_type:'offline',scope:authScope.join(' ')})
        res.send(authUrl);
    })
    router.get("/callback", (req, res) => {
        let code = req.query.code;
        oAuth2Client.getToken(code, (err,token) =>{
            console.log(token);
            process.env.NODE_ENV === 'production' ? res.redirect('/landing') :res.redirect('http://localhost:3000/landing')
        });
    }) 
}