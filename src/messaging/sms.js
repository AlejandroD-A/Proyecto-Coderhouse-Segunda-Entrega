const client = require('twilio')(process.env.TWILIO_ACCOUNTSID,process.env.TWILIO_AUTH_TOKEN)


function userNewOrder(phone){
    return client.messages.create({
        body: `Su pedido ha sido recibido y se encuentra en proceso`,
        from: process.env.TWILIO_NUMBER,
        to: phone
    })
}

module.exports = { userNewOrder }