const config = require('../config')

class PersistenceFactory{

    constructor(persistence){
        this.persistence = persistence
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

const persistenceFactory = new PersistenceFactory(config.PERSISTENCE)


module.exports = persistenceFactory.getPersistence()