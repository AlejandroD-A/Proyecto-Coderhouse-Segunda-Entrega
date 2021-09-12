const client = require('twilio')(process.env.TWILIO_ACCOUNTSID,process.env.TWILIO_AUTH_TOKEN)
const logger = require('../logger')
 const  newOrder = async (user) => {
     try{
      await client.messages.create({
            body: `Nuevo Pedido de ${user.name} - ${user.email}`,
            from: `whatsapp:${process.env.TWILIO_WHATSAPP}`,
            to: `whatsapp:${process.env.TWILIO_ADMIN_NUMBER}`
        })
     }catch(err){
        logger.error(`Ha ocurrido un error al enviar un whatsapp ${err.message}`)
     }
    
}

module.exports = { newOrder }