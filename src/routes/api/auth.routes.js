const express = require('express')
const router = express.Router()
const multer = require('../../middlewares/multer')
const checkAuth = require('../../middlewares/checkAuth')
const UserCtrl = require('../../controllers/UserController')

router.post('/signup', multer.single('avatar'), UserCtrl.signup)
    
router.post('/login', UserCtrl.login)

router.get('/user', checkAuth, async (req,res)=>{
    res.json({ message:"Success", user: req.user })
})


module.exports = router