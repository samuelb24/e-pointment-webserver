const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_AUTH_TOKEN);

module.exports = {
    verify : async (token) => {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_AUTH_TOKEN
        });

        return ticket.getPayload();
    }
}