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
            oAuth2Client.setCredentials(token);
            var oauth2 = google.oauth2({auth: oAuth2Client,version: 'v2'})
            oauth2.userinfo.get((err, userRes) => {
                req.session.user = userRes.data;
                console.log(req.session.user);
                process.env.NODE_ENV === 'production' ? res.redirect('/landing') :res.redirect('http://localhost:3000/landing')
            });
        });
    }) 
    router.get("/user_details", (req, res) => {
        res.json(req.session.user)
    })
}