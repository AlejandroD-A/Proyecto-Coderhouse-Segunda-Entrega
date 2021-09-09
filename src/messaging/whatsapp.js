const client = require('twilio')(process.env.TWILIO_ACCOUNTSID,process.env.TWILIO_AUTH_TOKEN)


async function newOrder(user){
    return await client.messages.create({
        body: `Nuevo Pedido de ${user.name} - ${user.email}`,
        from: `whatsapp:${process.env.TWILIO_WHATSAPP}`,
        to: `whatsapp:${process.env.TWILIO_ADMIN_NUMBER}`
    })
}

module.exports = { newOrder }