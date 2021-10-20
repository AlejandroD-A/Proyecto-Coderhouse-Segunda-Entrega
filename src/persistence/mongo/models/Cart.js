const Product = require('./Product')
const Cart = require('../schemas/CartSchema')
class CartModel {
    
    constructor(){
    }

    async get(id, userId){
        const cartProduct = Cart.findOne({ _id:id, user: userId}).populate('product')

        return cartProduct
    }
    async getAll(userId){
        const cartItems = await Cart.find({user: userId}).populate('product')
        return  cartItems
    }

    async add(id_producto, userId){

        const product = await Product.get(id_producto)

        if(product == undefined ) return undefined

        const newCart  = await Cart.create({ product: id_producto, user: userId })

        return await newCart.populate('product').execPopulate()
    }

    async remove(id, userId ){
        const deletedItem = await Cart.findOneAndDelete({_id:id, user: userId}).populate('product')
        return deletedItem
    }


}

module.exports = new CartModel()