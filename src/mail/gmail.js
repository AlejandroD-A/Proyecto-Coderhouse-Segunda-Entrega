const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});


const sendMail = (data) =>{
    transporter.sendMail({
        from: 'Ecommerce Ale',
        to: process.env.GMAIL_USER,
        subject: `Nuevo registro ${data.email}`,
        html: ` <p>${data.name}</p> 
                <p>${data.lastName}</p> 
                <p>${data.email}</p> 
                <p>${data.age}</p>
                <p>${data.phone}</p>
                <img src=${data.avatar}/>`,
    })
}


module.exports = { sendMail }