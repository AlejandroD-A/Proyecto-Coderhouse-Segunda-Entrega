const CartModel = require('../persistence/PersistenceFactory')('Cart')


class CartService {
    constructor(CartModel){
        this.cartModel = CartModel
    }
    async get(id, userId){
        return await this.cartModel.get(id, userId)
    }
    async getAll(userId){
        return await this.cartModel.getAll(userId)
    }
    async add(productId, userId){
        return await this.cartModel.add(productId, userId)
    }
    async remove(productCartId, userId){
        return await this.cartModel.remove(productCartId, userId)
    }
}

module.exports = new CartService(CartModel)