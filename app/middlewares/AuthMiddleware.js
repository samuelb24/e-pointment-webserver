const googleAuth = require('../models/googleAuth');

module.exports = {
    auth: async (req, res, next) => {
        let authHeader = req.header('Authorization');
        let token = authHeader.split(' ')[1];
        try
        {
            let {email, name} = await googleAuth.verify(token);
            req.auth = {
                email, 
                name
            };
        }
        catch(e)
        {
            return res.status(401).send('Invalid token');
        }
        next();
    }
}