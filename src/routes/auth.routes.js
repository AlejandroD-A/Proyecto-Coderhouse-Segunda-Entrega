const express = require('express')
const router = express.Router()
const passport = require('passport')
const checkAuth = require('../middlewares/checkAuth')

router.post('/signup', passport.authenticate('signup' ), async (req,res) => {
    res.json({ message:"Success", user: req.user })
})

router.post('/login', passport.authenticate('login' ), async (req,res) => {
    res.json({ message:"Success", user: req.user })
})

router.get('/user', checkAuth, async (req,res)=>{
    res.json({ message:"Success", user: req.user })
})

router.get('/logout',(req, res)=>{
    req.logout();
    res.json({ message:"Se ha deslogueado con exito"})
})

module.exports = router