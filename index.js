"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ nodemon
*/
const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Logger:
app.use(require('./src/middlewares/logger'))

// Auhentication:
// app.use(require('./src/middlewares/authentication'))

// findSearchSortPage / res.getModelList:
app.use(require('./src/middlewares/queryHandler'))

/* ------------------------------------------------------- */
// EMAIL
const nodemailer= require("nodemailer")
 //  create test Fake account
//nodemailer.createTestAccount().then((data)=> console.log(data))

/* 
{
  user: 'asjxwssdyx3bwaqk@ethereal.email',
  pass: 'tp8f9agrT14Dyqs7sr',
  smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
  imap: { host: 'imap.ethereal.email', port: 993, secure: true },
  pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
  web: 'https://ethereal.email'
*/
// const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false,
//     auth:{
//         user: 'asjxwssdyx3bwaqk@ethereal.email',
//         pass: 'tp8f9agrT14Dyqs7sr'   

//     }
// })
// transporter.sendMail({
//     from: 'sfystdx7sif4vdr3@ethereal.email',
//     to: 'ensarsagkal@gmail.com', // 'a@b.com, c@d.com'
//     subject: 'Hello',
//     text: 'Hello There. How are you?',
//     html: '<b>Hello There.</b> <p>How are you?</p>',
// }, (error, success) => {
//     success ? console.log('SUCCESS', success) : console.log('ERROR', error)
// })
// //* Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords

// const transporter=nodemailer.createTransport({
//     service:"gmail",
//     auth:{
//         user:"ensarsagkal@gmail.com",
//         pass:"ypop huad lwqc liih"
//     }
// })
// transporter.sendMail({
//     // to:"qadiradamson@gmail.com",
//         subject: 'Hello',
//     text: 'Hello There. How are you?',
//     html: '<b>Hello There.</b> <p>How are you?</p>',
// },(error, succes)=>console.log(succes,error))
/* ------------------------------------------------------- */


// Routes:

// routes/index.js:
app.use('/', require('./src/routes/'))

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PIZZA API',
        docs: {
            swagger: "/documents/swagger",
            redoc: "/documents/redoc",
            json: "/documents/json",
        },
        user: req.user,
    })
})

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.