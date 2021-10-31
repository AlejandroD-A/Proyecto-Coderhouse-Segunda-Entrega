import { config } from './index'

export  const getAll = async ()=>{
	try{
		console.log(config.url)
		const data = await fetch(`${config.url}/api/productos`)
		const jsonData = await data.json()
		console.log(jsonData)
		return jsonData.productos

	}catch(err){
		console.error(err)
	}
}