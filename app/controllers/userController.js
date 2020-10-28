const User = require('../models/User');

module.exports = {
    updateProfile : async (req, res) => {
        try{
            let email = req.auth.email;
            let user = await User.findOne({email});
            console.log(user);

            user.name = req.body.name;
            if(user.isnew)
            {
                user.isnew = false;
            }
            

            await user.save();

            res.json({
                email: user.email, 
                name: user.name,
                isNew: user.isnew
            });
        }
        catch(e)
        {
            console.error(e);
        }
    }
}