const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post('/signup', passport.authenticate('signup',{ failureRedirect:'/auth/failAuth'} ),async (req,res)=>{
    res.json({ message:"Success", user: req.user })
})

router.get('/failAuth',(req,res)=>{
    res.json({ message:"Datos Invalidos" })

})

module.exports = router