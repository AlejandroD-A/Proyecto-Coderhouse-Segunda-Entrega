const { getModel } = require ('../persistence')
const cartPersis = getModel('Cart')


class CartController{
    constructor(){
    }
    async listar(req,res){
        try{
            const id = req.params.id
            
            if( !id ) return res.json({cart: await cartPersis.getAll() })
        
            const cartProduct =  await cartPersis.get(id)
        
            if( cartProduct == undefined ) return res.json({error: 'No se encontro el articulo en el carrito'})
    
            return res.json({cartProduct: cartProduct})

        }catch(err){
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
        
    }

    async agregar(req,res){
        try{
            const cartProduct = await cartPersis.add(req.params.id_producto)
            
            if(cartProduct == null || cartProduct == undefined ) return  res.json({error: 'No se encuentra ese producto'})
    
            return res.json({producto : cartProduct})
    
        }catch(err){
            console.log(err)
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
       
    }

    async borrar(req,res){
        try{
            const producto = await cartPersis.remove(req.params.id)

            if(producto == undefined || producto == null ) return  res.json({error: 'No se encontro producto en carrito'})
        
            return res.json({message: 'Se ha eliminado el producto', producto: producto})

        }catch(err){
            console.log(err)
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
       
    }
}

module.exports = new CartController()