const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    timestamp : 
        { 
          type: Date,
          default : new Date(),
          required: true 
        },
    user :
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },    
    products :
        { 
            type: [
                   {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true} ],
            default: undefined,
            required: true
        }
    
})


module.exports = mongoose.model('Order',OrderSchema)