const googleAuth = require('../models/googleAuth');
const User = require('../models/User');

module.exports  = {
    signin: async (req, res, next) => {
        try
        {
            let {email, name} = req.auth;
            let user = await User.findOne({ email });
            
            if(!user)
            {
                user = new User({
                    email,
                    name
                });
                await user.save();
            }
            res.send({
                email, 
                name,
                isNew: user.isnew
            });
        }
        catch(e)
        {
            console.error(e);
            res.status(401).send('Invalid token');
        }
        
    }
} 
