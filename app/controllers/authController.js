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
                email: user.email, 
                name: user.name,
                isNew: user.isnew
            });
        }
        catch(e)
        {
            console.error(e);
            res.status(500).json({
                message: "Something went wrong"
            });
        }
        
    }
} 
