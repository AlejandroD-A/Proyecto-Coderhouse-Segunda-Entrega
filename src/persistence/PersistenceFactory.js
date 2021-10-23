const config = require('../config')
const logger = require('../logger')

class PersistenceFactory {
    static getPersistence(persistence,modelName){
        try {
             //Fyle System
            if( persistence == 1 ) return require(`./DAOS/${modelName}/fileSystem`)
            //Mongo Local
            if( persistence == 2 ) return require(`./DAOS/${modelName}/mongodb`)
            //Mongo Atlas
            if( persistence == 3 ) return require(`./DAOS/${modelName}/mongoAtlas`)
            //MySql Local
            if( persistence == 4 ) return require(`./DAOS/${modelName}/mysql`)

            throw new Error('No se encontro persistencia')
        }catch(err){
            console.log(err)
            logger.error('No se encontro el tipo de persistencia', persistence, modelName)
        }
    }
}

const persistence = config.PERSISTENCE

module.exports = ( modelName ) =>
     PersistenceFactory.getPersistence( persistence, modelName )