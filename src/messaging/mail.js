const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});


const newRegister = (data) =>{
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

const newOrder = ( user , products) => {
    transporter.sendMail({
        from: 'Ecommerce Ale',
        to: process.env.GMAIL_USER,
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
}

module.exports = { newRegister, newOrder }