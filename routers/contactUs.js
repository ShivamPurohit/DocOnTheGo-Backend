const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')

router.get('/', async(req,res) => {
  
    try{
        const contactUs = await Contact.find()
        res.json(contactUs)
    }catch(err){
        res.send('Error '+err)
    }
})

router.get('/:id', async(req,res) => {
  
    try{
        const contactUs = await Contact.findById(req.params.id)
        res.json(contactUs)
    }catch(err){
        res.send('Error '+err + ' => Not a valid id')
    }
})

router.post('/',async(req,res)=>{
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })

    try{
        const c = await contact.save()
        res.json(c)
    }catch(err){
        res.send('error')
    }
})

module.exports = router ;