export  const getAll = async ()=>{
	try{
		const data = await fetch('/carrito/listar')
		const jsonData = await data.json()
		return jsonData.cart

	}catch(err){
		console.error(err)
	}
}

export const addNew = async (id)=> {
	try{
		const data = await fetch(`/carrito/agregar/${id}`,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
		})
		const jsonData = await data.json()
		return jsonData.producto

	}catch(err){
		console.error(err)
	}
}


export const remove = async (id)=> {
	try{
		const data = await fetch(`/carrito/borrar/${id}`,{
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
		})
		const jsonData = await data.json()
		return jsonData.producto
	}catch(err){
		console.error(err)
	}
}


export const confirm = async ()=> {
	try{
		const data = await fetch(`/order`,{
			method: 'POST'
		})
		const jsonData = await data.json()
		return jsonData.order
	}catch(err){
		console.error(err)
	}
}