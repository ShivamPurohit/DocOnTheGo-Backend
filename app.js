const express = require('express')
const mongoose = require('mongoose')
const url ='mongodb://localhost/HackDB'


const app = express()

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const contactRouter = require('./routers/contactUs')
app.use('/contactUs',contactRouter)

const expertRouter = require('./routers/experts')
app.use('/experts',expertRouter)

const volunteerRouter = require('./routers/volunteers')
app.use('/volunteers',volunteerRouter)

const symptomRouter = require('./routers/symptoms')
app.use('/symptoms',symptomRouter)

app.listen(3000, function() {
    console.log('Server started at port 3000');
})