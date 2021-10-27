const express = require ('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const path = require('path')
const logger = require('./logger')
const config = require('./config')
const handleErrors = require('./middlewares/handleErrors')
const { sendEmailError } = require('./messaging/mail')

const app = express()

// Logger Request

if(config.NODE_ENV == 'development') {
  const morgan = require('morgan')
  app.use(morgan('tiny'))
}


app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

// Static Files 
app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use('/uploads',express.static(path.resolve(__dirname, '../uploads')))


// Passport 
require('./config/passport')(passport)

//Sessions
const sessionUrl  = config.ENV == 'development' ? config.MONGO_URL : config.MONGO_ATLAS_URL

app.use(session({
    store: MongoStore.create({ 
      mongoUrl: `${sessionUrl}/sesiones`,
      ttl: config.SESSION_TIME 
    }),
    secret: config.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  }))

//Passport Middlewares
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/auth', require('./routes/auth.routes'))

//Api Routes
app.use('/api/productos',require('./routes/api/products.routes'))
app.use('/api/carrito',require('./routes/api/cart.routes'))
app.use('/api/order', require('./routes/api/order.routes'))
app.use('/api/auth', require('./routes/api/auth.routes'))

// Middleware para manejar errores
app.use(handleErrors)

//Maneja Error de Ruta
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

app.on('error',async err =>{
  logger.warn(err.message, err)
  await sendEmailError(error)
  }
)