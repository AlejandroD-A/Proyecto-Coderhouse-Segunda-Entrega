const User = require('../persistence/PersistenceFactory')('User')
const Mail = require('../messaging/mail')
const bcrypt = require('bcrypt')

class UserService{
    constructor(model){
        this.model = model
    }

    async getById(id){
        return await this.model.getById(id)
    }
    
    async getOneBy(data,withPass){
        return await this.model.getOneBy(data,withPass)
    }

    async save(data){
        return await this.model.save(data)
    }

    async register(dataUser){
        const user = await this.model.save(dataUser)
        await Mail.newRegister(user)
        return user
    }

    verifyPassword(hashPass, pass){
        return bcrypt.compareSync(pass, hashPass)
    }

}

module.exports = new UserService(User) 