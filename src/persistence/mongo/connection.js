const mongoose = require('mongoose');
const { persistence } = require('../../config')
const logger = require('../../logger')

const url = persistence == 2 ? process.env.MONGO_URL : process.env.MONGO_ATLAS_URL
const dbName = persistence == 2 ? 'MONGO LOCAL' : 'MONGO ATLAS'

const connection = mongoose.connect(`${url}/ecommerce`,
     { 
        useNewUrlParser:  true, useUnifiedTopology: true,useFindAndModify : false, useCreateIndex: true
     }
    )

mongoose.connection.on('connected', ()=> {
    logger.info(`[${dbName}] - Connected in: ${url}`)
})

mongoose.connection.on('error',(err)=>{
    logger.info('[Mongoose]- Error :',err)
})

module.exports = connection