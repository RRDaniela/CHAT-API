const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 255
    },
    email: {
        type: String,
        required: true,
        maxLength: 255, 
        minLength: 6
    },
    password: {
        type:String, 
        required: true,
        maxLength: 1024,
        minLength: 6
    },
    role: {
        type:String, 
        required: true,
        maxLength: 255,
        minLength: 6
    },
    group: {
        type:String, 
        required: true,
        maxLength: 255,
        minLength: 6
    }
}); 

module.exports = mongoose.model('User', userSchema);