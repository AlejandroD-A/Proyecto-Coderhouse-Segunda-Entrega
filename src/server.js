const express = require ('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const path = require('path')
const logger = require('./logger')
const config = require('./config')

const app = express()

if(config.NODE_ENV == 'development') {
  const morgan = require('morgan')
  app.use(morgan('tiny'))
}

app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use('/uploads',express.static(path.resolve(__dirname, '../uploads')))


require('./config/passport')(passport)

//Sessions
const sessionUrl  = config.ENV == 'development' ? config.MONGO_URL : config.MONGO_ATLAS_URL

app.use(session({
    store: MongoStore.create({ 
      mongoUrl: `${sessionUrl}/sesiones`,
      ttl: 60 * 10 
    }),
    secret: 'secreto',
    resave: true,
    saveUninitialized: true,
  }))

//Passport 
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/productos',require('./routes/products.routes'))
app.use('/carrito',require('./routes/cart.routes'))
app.use('/auth', require('./routes/auth.routes'))
app.use('/order', require('./routes/order.routes'))


// Middleware para manejar errores
app.use((error, req, res, next) => {
    console.log(error)
    logger.warn(error)
    return res.status(error.code || 500).json({ error : error })
})

//Maneja Error de Ruta - Falta filtrar Api
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

//Error de Ruta
app.use((req, res, next) => {
    res.status(404).json({
    status: 404,
    message: `No se encuentra la ruta ${req.originalUrl}`,
    error: 'Not Found'
    })
})

const PORT = config.PORT || 8080

app.listen(PORT, () => logger.info(`Running in http://localhost:${PORT}`))

app.on('error',err =>
  logger.warn(err)
)