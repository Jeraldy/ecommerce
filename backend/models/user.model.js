const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User