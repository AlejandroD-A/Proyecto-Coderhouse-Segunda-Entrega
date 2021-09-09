const isAuth = ( (req,res,next)=>{
    if(!req.isAuthenticated()) return res.status(401).json({message: 'Forbidden'})
     next()
})

module.exports = isAuth

