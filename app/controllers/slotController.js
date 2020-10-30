const User = require('../models/User');
const Slot = require('../models/Slot');

module.exports = {
    createNew : async (req, res) => {
        try
        {
            let user = await User.findOne({ email: req.auth.email });
            let slot = new Slot({
                owner: user._id,
                title: req.body.title,
                description: req.body.description
            });
            await slot.save()

            res.send({
                title: slot.title,
                description: slot.description
            })
        }
        catch(e)
        {
            console.error(e);
            res.status(500).json({
                message: "Something went wrong"
            });
        }
    },

    list : async (req, res) => {
        let slots = await Slot.find().populate({
            path: 'owner', 
            select: 'name'
        });
        res.json(slots);
    }
}