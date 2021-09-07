const express = require ('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')

require('dotenv').config()
const app = express()
const morgan = require('morgan')

const persistence = require('./persistence')

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))



//DB connection 
persistence.connectDB()

require('./config/passport')(passport)


//Sessions
const sessionUrl  = process.env.ENV == 'DEV' ? process.env.MONGO_URL : process.env.MONGO_ATLAS_URL
app.use(session({
    store: MongoStore.create({ 
      mongoUrl: `${sessionUrl}/sesiones`,
      ttl: 60 * 10 
    }),
    secret: 'secreto',
    resave: true,
    saveUninitialized: true,
  }))

//- Passport 

app.use(passport.initialize())
app.use(passport.session())


//Routes
app.use('/productos',require('./routes/products'))
app.use('/carrito',require('./routes/cart'))
app.use('/auth', require('./routes/auth'))

// Middleware para manejar errores
app.use((error, req, res, next) => {
    console.log(error)
    return res.status(error.code || 500).json({ error : error })
  })

//Error de Ruta
app.use((req, res, next) => {
    res.status(404).json({
    status: 404,
    message: `No se encuentra la ruta ${req.originalUrl}`,
    error: 'Not Found'
    })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Running in http://localhost:${PORT}`))

app.on('error',err => console.log(err))