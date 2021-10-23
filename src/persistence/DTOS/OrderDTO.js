class CartDTO {

    #id
    #timestamp
    #user
    #products
    #status

    constructor(  id, timestamp, user, products, status ) {
        this.#id = id;
        this.#timestamp = timestamp;
        this.#user = user;
        this.#products = products;
        this.#status = status;
      
    }

    getId(){ return this.#id }
    getTimestamp(){ return this.#timestamp }
    getUser(){ return this.#user }
    getProducts(){ return this.#products }
    getStatus(){ return this.#status }
    

    toJson(){
        return {
            id: this.#id,
            timestamp: this.#timestamp,
            user: this.#user,
            products: this.#products,
            status: this.#status,
        }
    }
}

module.exports = CartDTO;