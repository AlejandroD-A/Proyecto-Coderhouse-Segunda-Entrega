const Order = require('../schemas/OrderSchema')
const Cart = require('../schemas/CartSchema')
const Product = require('../schemas/ProductSchema')

class OrderModel {
    
    constructor(){
    }

    async create(userId){

        const cartProducts = await Cart.find({ user: userId },{ timestamp: false, user: false})
        
        const productsIds = cartProducts.map(cartItem => cartItem.product._id)
        const newOrder  = await Order.create({ products: productsIds, user: userId })
        
        await Cart.deleteMany({ user: userId })

        return await newOrder.populate('products',{ stock: false, __v: false }).execPopulate()

        }
    

}

module.exports = new OrderModel()