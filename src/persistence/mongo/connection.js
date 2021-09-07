const mongoose = require('mongoose');

const { persistence } = require('../../config')

const url = persistence == 2 ? process.env.MONGO_URL : process.env.MONGO_ATLAS_URL

const dbName = persistence == 2 ? 'MONGO LOCAL' : 'MONGO ATLAS'

const connection = mongoose.connect(`${url}/ecommerce`,
     { 
        useNewUrlParser:  true, useUnifiedTopology: true,useFindAndModify : false, useCreateIndex: true
     }
    )

mongoose.connection.on('connected', ()=> {
    console.log(`[${dbName}] - Connected in: `,url)
})

mongoose.connection.on('error',(err)=>{
    console.log('[Mongoose]- Error :',err)
})

module.exports = connection