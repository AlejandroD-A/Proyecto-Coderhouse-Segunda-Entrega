const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    timestamp : 
        { 
          type: Date,
          default : new Date(),
          required: true 
        },
    product :
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        }
    
})


module.exports = mongoose.model('Cart',CartSchema)