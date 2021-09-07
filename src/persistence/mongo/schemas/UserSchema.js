const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    email : 
        { 
          type: String,
          unique: true,
          index: true,
          required: true 
        },
    password :
        { 
            type: String,
            required: true
        },
    name :
        { 
            type: String,
            required: true
        },
    lastName :
        { 
            type: String,
            required: true
        },
    age :
        {   
            type: String,
            required: true
        },
    phoneNumber :
        { 
            type: String,
            required: true
        },
    
})

UserSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    next()
})

module.exports = mongoose.model('User',UserSchema)