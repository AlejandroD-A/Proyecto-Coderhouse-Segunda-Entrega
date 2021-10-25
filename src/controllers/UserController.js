const UserService = require('../services/UserService')
class UserController{
    constructor(){
    }

    async login( req, res ){

        const { email, password } = req.body 
        let user = await UserService.getOneBy( {email: email}, true )
        
        if(!user) return res.status(400).json({ message: 'Invalid Credentials'})
        if(!UserService.verifyPassword(user.password, password )) return res.status(400).json({ message: "Invalid Credentials"})
        const token =  UserService.generateToken(user)
        
        return res.json({ user: user, token: token })
    }

    async signup( req, res ){
        return res.json({})
    }
}



module.exports = new UserController()