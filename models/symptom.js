const mongoose = require('mongoose')



const symptomsSchema = new mongoose.Schema({

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
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    fever: {
        type: String,
        required: true
    },
    serious_Symptom: {
        type: String,
        required: true
    },
    other_Symptom: {
        type: String,
        required: true
    },
    risk_factor: {
        type: String,
        required: true
    },
    additional_Risk: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }


})

module.exports = mongoose.model('Symptom',symptomsSchema)