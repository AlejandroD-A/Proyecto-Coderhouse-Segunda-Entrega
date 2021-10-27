const CartService = require('../services/CartService')

class CartController{
    constructor(){
    }
    async listar(req,res){
        try{
            const id = req.params.id
            if( !id ) return res.json( { cart: await CartService.getAll(req.user.id) })
        
            const cartProduct =  await CartService.get(id, req.user.id)
        
            if( cartProduct == undefined ) return res.json({error: 'No se encontro el articulo en el carrito'})
    
            return res.json({cartProduct: cartProduct})

        }catch(err){
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
        
    }

    async agregar(req,res){
        try{
            const cartProduct = await CartService.add(req.params.id_producto, req.user.id)
            
            if(cartProduct == null || cartProduct == undefined ) return  res.json({error: 'No se encuentra ese producto'})
    
            return res.json({producto : cartProduct})
    
        }catch(err){
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
       
    }

    async borrar(req,res){
        try{
            const producto = await CartService.remove(req.params.id,req.user.id)

            if(producto == undefined || producto == null ) return  res.json({error: 'No se encontro producto en carrito'})
        
            return res.json({message: 'Se ha eliminado el producto', producto: producto})

        }catch(err){
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
       
    }
}

module.exports = new CartController()