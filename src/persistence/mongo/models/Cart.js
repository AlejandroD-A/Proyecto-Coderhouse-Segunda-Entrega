const productModel  = require('./Product')
const Cart = require('../schemas/CartSchema')
class CartModel{
    
    constructor(){
    }

    async get(id){
        
        const cartProduct = await Cart.findById(id).populate('product')
        return cartProduct
    }
    async getAll(){
        const cartItems = await Cart.find().populate('product')
        return  cartItems
      
    }

    async add(id_producto){

        const product = await productModel.get(id_producto)

        if(product == undefined ) return undefined

        const newCart  = await Cart.create({product: id_producto})

        return await newCart.populate('product').execPopulate()
    }

    async remove(id){
        const deletedItem = await Cart.findByIdAndDelete(id).populate('product')
        return deletedItem
    }


}

module.exports = new CartModel()