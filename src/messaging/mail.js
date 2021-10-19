const nodemailer = require('nodemailer')
const logger = require('../logger')
const config = require('../config')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.GMAIL_USER,
        pass: config.GMAIL_PASS
    }
});


const newRegister = async (data) =>{
    try{ 
        await transporter.sendMail({
            from: 'Ecommerce Ale',
            to: config.GMAIL_USER,
            subject: `Nuevo registro ${data.email}`,
            html: ` <p>${data.name}</p> 
                    <p>${data.lastName}</p> 
                    <p>${data.email}</p> 
                    <p>${data.age}</p>
                    <p>${data.phone}</p>
                    <img src=${data.avatar}/>`,
        })
    }catch(err){
        logger.error(`Ha ocurrido un error al enviar el mail de registro ${err.message}, usuario: ${data.email}`)
    }
}

const newOrder = async  ( user , products) => {
    try{
        await transporter.sendMail({
            from: 'Ecommerce Ale',
            to: config.GMAIL_USER,
            subject: `Nuevo Pedido de ${user.name} - ${user.email}`,
            html: `
                <h5> Usuario: </h5>
                    <p>${user.name} ${user.lastName}</p> 
                    <p>${user.email}</p> 
                    <p>${user.phone}</p>
                    </hr>
        
                    <h2> Pedido </h2>
                    <ul>
                     ${ products.map(product => `<li>${product.title}</li>`) } 
                    </ul>
                    `
        })
    }catch(err){
        logger.error(`Ha ocurrido un error al enviar un mail ${err.message}, usuario: ${user.email}`)
    }
    
}

module.exports = { newRegister, newOrder }