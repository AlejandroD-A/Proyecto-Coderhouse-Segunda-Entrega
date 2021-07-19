
const persistence = require('../persistence')

const productPersis = persistence.getModel('Product')

class ProductController{
    constructor(){
    }

    async listar(req,res){
        try{
            const id = req.params.id

            //Obtener Uno
            if(id){
                const producto = await productPersis.get(id)

                if(producto == undefined || producto == null ) return  res.status(404).json({error: 'No se encontro el producto'})

                return res.json({ producto: producto })
            }

            //filtrar 

            if(Object.keys(req.query).length ){
                let data = {}
                const { nombre,codigo,precio,stock} = req.query
                if(nombre) data.nombre = nombre
                if(codigo) data.codigo = codigo
                if(precio) data.precio = precio
                if(stock) data.stock = stock

                const productos = await productPersis.filter(data)

                return res.json({ productos : productos })

            }

            //Obtener Todos
            const productos = await productPersis.getAll()

            return res.json({ productos : productos })
    
        }catch(err){
            console.log(err)
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
    }

    async agregar(req,res){
        try {
            const data = req.body
            const producto = await productPersis.create(data)

            return res.json({ producto: producto })

        }catch(err){
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
    }

    async actualizar(req,res){
        try {
            const data = req.body
            const id = req.params.id

            const producto = await productPersis.update(id,data)

            if( producto == undefined || producto == null ){
                return res.status(404).json({error: 'No se encontro el producto'})
            } 

            return res.json({producto: producto})
        }catch(err){
            return res.status(500).json({error: 'Ha ocurrido un error'})
        }
    }
    async borrar (req,res){
        try{
            const producto = await productPersis.remove(req.params.id)
    
            if( producto == undefined || producto == null ) return  res.status(404).json({error: 'No se encontro el producto'})
    
            return  res.json({producto: producto })
        }catch(err){
            return res.status(500).json({error: 'Ha ocurrido un problema'})
        }
        
    }
}

module.exports = new ProductController()