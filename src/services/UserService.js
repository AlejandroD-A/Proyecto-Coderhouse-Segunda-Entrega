const User = require('../persistence/PersistenceFactory')('User')
const Mail = require('../messaging/mail')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { SECRETJWT } = require('../config')

class UserService{
    constructor(UserModel){
        this.UserModel = UserModel
    }

    async getById(id){
        return await this.UserModel.getById(id)
    }
    
    async getOneBy(data,withPass){
        return await this.UserModel.getOneBy(data,withPass)
    }

    async save(data){
        return await this.UserModel.save(data)
    }

    async register(dataUser){
        const user = await this.UserModel.save(dataUser)
        await Mail.newRegister(user)
        return user
    }
    
    verifyPassword(hashPass, pass){
        return bcrypt.compareSync(pass, hashPass)
    }

    generateToken(user) {
        return jwt.sign({ data: user }, SECRETJWT, { expiresIn: '10m' });
    }

}

module.exports = new UserService(User) 