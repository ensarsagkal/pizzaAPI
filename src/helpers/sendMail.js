"use strict"
const nodemailer=require("nodemailer")

module.exports= function (to,subject,message) {
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

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"ensarsagkal@gmail.com",
        pass:"ypop huad lwqc liih"
    }
})
transporter.sendMail({
    to: to,//"ensarsagkal@gmail.com",
        subject: subject,// 'Hello',
    text: message,//'Hello There. How are you?',
    html: message,//'<b>Hello There.</b> <p>How are you?</p>',
},(error, succes)=>console.log(succes,error))
/* ------------------------------------------------------- */

}