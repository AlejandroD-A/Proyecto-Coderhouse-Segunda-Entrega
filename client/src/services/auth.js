

export const register = async (user)=> {

		const res = await fetch('/auth/signup',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		if (!res.ok) throw new Error('Ha ocurrido un Error')
		return await res.json()
}

export const login = async (user)=> {
	try{
		const data = await fetch('/auth/login',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		const jsonData = await data.json()
		return jsonData

	}catch(err){
		throw err 
	}
}