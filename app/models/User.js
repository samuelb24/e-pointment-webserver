const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    isnew: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('users', UserSchema);