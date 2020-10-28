const User = require('../models/User');

module.exports = {
    updateName : async (req, res) => {
        try{
            let user = User.findOne({});
        }
        catch(e)
        {
            
        }
    }
}