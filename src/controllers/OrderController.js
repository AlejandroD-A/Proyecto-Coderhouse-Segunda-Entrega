const logger = require("../logger")
const OrderService = require("../services/OrderService")

class OrderController{
    constructor(){
    }
    async crearPedido(req, res){
        try{
            //Crear Orden
            
            const order = await OrderService.createOrder(req.user)
            
            return res.json({ message : 'Success', order: order })

        }catch(err){
            console.log(err)
            logger.error(err)
            return res.status(500).json({ error: 'Ha ocurrido un error' })
        }   
    }
}

module.exports = new OrderController()