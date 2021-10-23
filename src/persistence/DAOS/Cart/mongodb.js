const { Cart } = require('../../mongo/schemas/CartSchema')
const { Product } = require('../../mongo/schemas/ProductSchema')

const ICartDAO = require('./ICartDAO')
const CartDTO = require('../../DTOS/CartDTO')

const ObjectId = require('mongoose').Types.ObjectId;

class CartMongoDAO extends ICartDAO {

    constructor( Cart,Product,DTO ){
        super()
        this.CartModel = Cart
        this.ProductModel = Product
        this.DTO = DTO

        require('../../mongo/connection')
    }
    
    async get(id, user_id){

        if(!ObjectId.isValid(id)) return undefined

        const cartProduct = this.CartModel.findOne({ _id:id, user: user_id}).populate('product').lean()
        if(!cartProduct) return undefined

        const  { _id, timestamp, userId, products } = cartProduct

        return new this.DTO( _id,timestamp, userId, products ).toJson()
    }

    async getAll(user_id){
        const data = await this.CartModel.find({user: user_id}).populate('product').lean()
        return data.map( cartItem =>
            new this.DTO( 
                cartItem._id,
                cartItem.timestamp,
                cartItem.userId,
                cartItem.product,
                cartItem.quantity
                ).toJson()
            )
    }

    async add(id_producto, user_id){

        const productData = await this.ProductModel.findById(id_producto)

        if( productData == undefined ) return undefined

        const newCart  = await this.CartModel.create({ product: id_producto, user: user_id })

        const { _id, timestamp, userId, product, quantity } = await newCart.populate('product').execPopulate()

        return new this.DTO(_id, timestamp, userId, product, quantity).toJson()
    }

    async remove(id, user_id ){
        const deletedItem = await Cart.findOneAndDelete({_id:id, user: user_id}).populate('product')

        if(!deletedItem) return undefined

        const { _id, timestamp, userId, product, quantity } = deletedItem
        return new this.DTO(_id, timestamp, userId, product, quantity).toJson()
    }

    

}

module.exports = new CartMongoDAO( Cart, Product,CartDTO)