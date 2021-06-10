const express = require('express')
const router = express.Router()
const Symptom = require('../models/symptom')

router.get('/', async(req,res) => {
  
    try{
        const symptoms = await Symptom.find()
        res.json(symptoms)
    }catch(err){
        res.send('Error '+err)
    }
})



router.post('/',async(req,res)=>{
    const symptom = new Symptom({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        age: req.body.age,
        gender: req.body.gender,
        fever: req.body.fever,
        serious_Symptom: req.body.serious_Symptom,
        other_Symptom: req.body.other_Symptom,
        risk_factor: req.body.risk_factor,
        additional_Risk: req.body.additional_Risk
    })

    try{
        const c = await symptom.save()
        res.json(c)
    }catch(err){
        res.send('error'+err)
    }
})


module.exports = router ;