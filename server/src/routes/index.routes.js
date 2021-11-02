const express = require('express')
const ProductService = require('../services/ProductService')
const router = express.Router()


router.get('/', async (req, res ) => {
   return res.redirect('/productos')
})


module.exports = router