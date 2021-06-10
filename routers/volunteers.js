const express = require('express')
const router = express.Router()
const Volunteer = require('../models/volunteer')

router.get('/', async(req,res) => {
  
    try{
        const volunteers = await Volunteer.find()
        res.json(volunteers)
    }catch(err){
        res.send('Error '+err)
    }
})

router.get('/:id', async(req,res) => {
  
    try{
        const volunteer = await Volunteer.findById(req.params.id)
        res.json(volunteer)
    }catch(err){
        res.send('Error '+err + ' => Not a valid id')
    }
})

router.post('/',async(req,res)=>{
    const volunteer = new Volunteer({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        address: req.body.address,
        aadhar: req.body.aadhar,
        how_can_you_contribute: req.body.how_can_you_contribute,
        why_do_you_want_to_contribute: req.body.why_do_you_want_to_contribute
    })

    try{
        const c = await volunteer.save()
        res.json(c)
    }catch(err){
        res.send('error')
    }
})


module.exports = router ;