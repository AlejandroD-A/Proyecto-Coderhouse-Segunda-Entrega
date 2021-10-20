
export  const getAll = async ()=>{
	try{
		const data = await fetch('/productos')
		const jsonData = await  data.json()
		console.log(jsonData)
		return jsonData.productos

	}catch(err){
		console.error(err)
	}
}