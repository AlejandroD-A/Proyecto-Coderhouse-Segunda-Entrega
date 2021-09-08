const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post('/signup', passport.authenticate('signup' ),async (req,res)=>{
    res.json({ message:"Success", user: req.user })
})

router.post('/login', passport.authenticate('login' ),async (req,res)=>{
    res.json({ message:"Success", user: req.user })
})



module.exports = router