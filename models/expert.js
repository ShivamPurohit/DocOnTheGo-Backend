const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const expertsSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashed_password: {
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
    speciality: {
        type: String,
        required: true
    },
    other_speciality: {
        type: String,
        required: true
    },
    additional_comments: {
        type: String,
        required: true
    },


})

expertsSchema.pre('save', async function (next){
    try{
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(this.hashed_password,salt)
      this.hashed_password = hashedPassword
       next() 
    }catch(error){
        next(error)
    }
})


module.exports = mongoose.model('Expert',expertsSchema)