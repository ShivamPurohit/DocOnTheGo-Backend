const mongoose = require('mongoose')



const volunteersSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    aadhar: {
        type: String,
        required: true
    },
    how_can_you_contribute: {
        type: String,
        required: true
    },
    why_do_you_want_to_contribute: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }


})

module.exports = mongoose.model('Volunteer',volunteersSchema)