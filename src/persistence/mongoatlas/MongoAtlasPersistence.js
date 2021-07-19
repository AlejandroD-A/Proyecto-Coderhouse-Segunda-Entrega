const Persistence = require('../Persistence')

class MongoPersistence extends Persistence{
    constructor(){
        super()

    }
    connectDB(){
        return require('../mongo/connection')
    }

    getModel(modelName){
        return require(`../mongo/models/${modelName}`)
    }
}


module.exports = new MongoPersistence()