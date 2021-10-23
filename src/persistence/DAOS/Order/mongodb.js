const { Order } = require('../../mongo/schemas/OrderSchema')
const { Cart } = require('../../mongo/schemas/CartSchema')

const IOrderDAO = require('./IOrderDAO')
const OrderDTO = require('../../DTOS/OrderDTO')

const ObjectId = require('mongoose').Types.ObjectId;

class OrderMongoDAO extends IOrderDAO {

    constructor( Cart, Order, DTO ){
        super()
        this.CartModel = Cart
        this.OrderModel = Order
        this.DTO = DTO

        require('../../mongo/connection')
    }
    
    async create(user_id){

        if(!ObjectId.isValid(user_id)) return undefined

        const cartProducts = await this.CartModel
            .find({ user: user_id })
            .lean()
            .populate({ path: 'product', select: '_id title description code thumbnail price'}).exec()
        
        if( cartProducts.length == 0 ) throw new Error('No hay productos en el carrito')

        const products = cartProducts.map( cartProd => { 
            return {
                ...cartProd.product, 
                quantity: cartProd.quantity
            } 
        })

        const newOrder  = await this.OrderModel.create(
                { 
                    user: user_id, 
                    products: products,
                    number: await this.OrderModel.countDocuments({}) 
                }
            )
        
        await this.CartModel.deleteMany({ user: user_id })
                
        return new this.DTO(newOrder).toJson()
    }

}

module.exports = new OrderMongoDAO( Cart, Order, OrderDTO)