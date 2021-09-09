const { getModel } = require ('../persistence')
const Order = getModel('Order')
const Mail = require('../messaging/mail')
const WhatsApp = require('../messaging/whatsapp')
const Sms = require('../messaging/sms')

class OrderController{
    constructor(){
    }
    async crearPedido(req, res){
        try{
            //Crear Orden
            const order = await Order.create(req.user._id)

            //Envio de Email a Administrador
            await Mail.newOrder(req.user,order.products)

            //Envia de Whatsapp a Administrador   
            await WhatsApp.newOrder(req.user)

            //Envio de Sms a User
            await Sms.userNewOrder(req.user.phone)

            return res.json({ message : 'Success', order: order })

        }catch(err){
            console.log(err)
            return res.status(500).json({ error: 'Ha ocurrido un error' })
        }   
    }
}

module.exports = new OrderController()