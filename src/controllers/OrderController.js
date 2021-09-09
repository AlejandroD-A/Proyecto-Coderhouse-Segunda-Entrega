const { getModel } = require ('../persistence')
const Order = getModel('Order')
const Mail = require('../messaging/mail')

class OrderController{
    constructor(){
    }
    async crearPedido(req, res){
        try{
            const order = await Order.create(req.user._id)
            console.log(order.products)
            await Mail.newOrder(req.user,order.products)
            return res.json({ message : 'Success', order: order })

        }catch(err){
            console.log(err)
            return res.status(500).json({ error: 'Ha ocurrido un error' })
        }   
    }
}

module.exports = new OrderController()