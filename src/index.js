const cluster = require ('cluster')
const numCPUs = require ('os').cpus().length
const logger = require('./logger')

if (process.argv[2] == 'CLUSTER'){
      if(cluster.isMaster){
      logger.info(numCPUs)
      logger.info(`PID MASTER ${process.pid}`)
  
      for( let i = 0; i < numCPUs; i++ ){
        cluster.fork()
      }
      cluster.on('exit',worker => {
        logger.warn(`Worker PID: ${worker.process.pid} died ${new Date().toLocaleString()}`)
        
        cluster.fork()
      })
    }else {
        require('./server')
    }
  }else {
    require('./server')
  }
  