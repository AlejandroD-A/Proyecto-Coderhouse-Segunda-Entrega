/*
  1- FILESYSTEM
  2- MONGO
  3- MONGOATLAS
  4- MYSQL

*/

const persistence = process.env.PERSISTENCE || 2
const config = {
    persistence: persistence
}


module.exports = config