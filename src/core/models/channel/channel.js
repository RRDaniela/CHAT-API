const mongoose = require ('mongoose');

const ChannelSchema = mongoose.Schema({
    creator:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Channel', ChannelSchema);