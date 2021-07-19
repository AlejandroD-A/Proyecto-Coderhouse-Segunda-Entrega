const Persistence = require('../Persistence')

class MongoPersistence extends Persistence{
    constructor(){
        super()
    }
    connectDB(){
        return require('./connection')
    }

    getModel(modelName){
        return require(`./models/${modelName}`)
    }
}


module.exports = new MongoPersistence()
