const mongoose = require('mongoose')

const Cart = require('./CartSchema')

const ProductSchema = new mongoose.Schema({
    timestamp : {type: Date, default : new Date(), required: true },
    nombre: { type: String, required: true },
    descripcion:{ type: String, required: true},
    codigo: { type: String, required: true },
    foto: { type: String, required: true },
    precio: { type: Number, required: true},
    stock: { type: Number, required: true, default: 0 }    
})

ProductSchema.post('findOneAndDelete', async document => {
    const productId  = document._id
    await Cart.deleteMany({ product: productId })
})


module.exports = mongoose.model('Product',ProductSchema)