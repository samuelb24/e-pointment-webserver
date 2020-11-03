const Joi = require('joi');
const User = require('../models/User');

const updateProfileSchema = Joi.object({
    name: Joi.string()
            .alphanum()
            .min(3)
            .max(100)
            .required()
});

module.exports = {
    updateProfile : async (req, res) => {
        
        let validation = updateProfileSchema.validate(req.body);
        if(validation.error)    
        {
            res.status(400).send({
                element: validation.error.details[0].path,
                error: validation.error.details[0].message
            });
        }
        
        try
        {
            let email = req.auth.email;
            let user = await User.findOne({email});

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