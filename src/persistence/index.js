const {persistence} = require('../config')

class PersistenceFactory{

    constructor(){
        this.persistence = persistence || 1
    }

    getPersistence(){
        //Fyle System
        if( this.persistence == 1 ) return require('./fs/FSPersistence')
        //Mongo Local
        if( this.persistence == 2 ) return require('./mongo/MongoPersistence')

        //Mongo Atlas
        if( this.persistence == 3 ) return require('./mongoatlas/MongoAtlasPersistence')

        //MySql Local
        if( this.persistence == 4 ) return require('./mysql/MySqlPersistence')
        

        throw Error('No existe la persistencia especificada')
    }

}

const persistenceFactory =  new PersistenceFactory()


module.exports = persistenceFactory.getPersistence()