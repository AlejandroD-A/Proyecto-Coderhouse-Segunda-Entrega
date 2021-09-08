const isAuth = ( (req,res,next)=>{
    //const isLogged =  Boolean(req.user)
    if(!req.isAuthenticated()) return res.status(401).json({message: 'Forbidden'})
     next()
})

module.exports = isAuth

