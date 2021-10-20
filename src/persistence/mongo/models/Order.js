const Order = require('../schemas/OrderSchema')
const Cart = require('../schemas/CartSchema')

class OrderModel {
    
    constructor(){
    }

    async create(userId){

        const cartProducts = await Cart.find({ user: userId }).lean().populate({ path: 'product', select: '_id title description code thumbnail price'}).exec()
        
        if( cartProducts.length == 0 ) throw new Error('No hay productos en el carrito')

        const products = cartProducts.map(cartProd =>{ return {...cartProd.product, quantity:cartProd.quantity} }  )
        const newOrder  = await Order.create({ user: userId, products: products, number: await Order.countDocuments({}) })
        
        await Cart.deleteMany({ user: userId })

        return newOrder
        }
    

}

module.exports = new OrderModel()