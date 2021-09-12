const Product = require('../schemas/ProductSchema')
var ObjectId = require('mongoose').Types.ObjectId;

class ProductModel{ 
    constructor(){
    }

    async getAll(){
        const products = await Product.find()
        return products
    }

    async get(id){
        const product = await Product.findById(id)
        return product
    }
    
    async create(data){
        const product = await Product.create(data)
        return product
    }

    async update(id, data){
        if(!ObjectId.isValid(id)) return undefined
        const productUpdated = await Product.findByIdAndUpdate( id ,data ,{ new: true} )
        return productUpdated
    }

    async remove(id){ 
        if(!ObjectId.isValid(id)) return undefined

        const deletedProduct = await Product.findByIdAndDelete( id )
        return deletedProduct
    }

    async filter(data){

        const products =  await Product.find(data)
        
        return products
    }

}   

module.exports = new ProductModel()
