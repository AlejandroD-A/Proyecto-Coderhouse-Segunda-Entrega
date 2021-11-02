const express = require('express')
const checkAuthRedirect = require('../middlewares/checkAuthRedirect')
const ProductService = require('../services/ProductService')
const router = express.Router()


router.get('/', checkAuthRedirect, async (req, res ) => {
    const products = await ProductService.getAll()
    return res.render('productos',{ 
        title: 'Productos', 
        productsExists: Boolean(products.length),
        products: products
    })
})


module.exports = router