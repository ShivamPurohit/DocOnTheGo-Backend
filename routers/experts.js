const express = require('express')
const router = express.Router()
const Expert = require('../models/expert')

router.get('/', async(req,res) => {
  
    try{
        const experts = await Expert.find()
        res.json(experts)
    }catch(err){
        res.send('Error '+err)
    }
})

router.get('/:id', async(req,res) => {
  
    try{
        const expert = await Expert.findById(req.params.id)
        res.json(expert)
    }catch(err){
        res.send('Error '+err + ' => Not a valid id')
    }
})

router.post('/',async(req,res)=>{
    const expert = new Expert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        hashed_password: req.body.hashed_password,
        contact: req.body.contact,
        address: req.body.address,
        aadhar: req.body.aadhar,
        speciality: req.body.speciality,
        other_speciality: req.body.other_speciality,
        additional_comments: req.body.additional_comments,
        
    })

    try{
        const c = await expert.save()
        res.json(c)
    }catch(err){
        res.send('error'+err)
    }
})


module.exports = router ;