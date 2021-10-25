const express = require('express')
const router  = express.Router()

const CartCtrl = require('../../controllers/CartController')
const checkAuth = require('../../middlewares/checkAuth')
console.log('some')
router.get('/:id?',checkAuth, CartCtrl.listar)
router.post('/:id_producto', checkAuth, CartCtrl.agregar)
router.delete('/:id', checkAuth, CartCtrl.borrar)


module.exports = router