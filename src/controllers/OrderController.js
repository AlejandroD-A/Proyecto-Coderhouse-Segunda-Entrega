const { getModel } = require ('../persistence')
const Order = getModel('Order')

class OrderController{
    constructor(){
    }
    async crearPedido(req, res){
        try{
            const order = await Order.create(req.user._id)
            
            return res.json({ message : 'Success', order: order })

        }catch(err){
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }   
    }
}

module.exports = new OrderController()