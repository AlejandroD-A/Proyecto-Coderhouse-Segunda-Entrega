

export const register = async (user)=> {
	try{
		const data = await fetch('/auth/signup',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		const jsonData = await data.json()
		return jsonData

	}catch(err){
		console.error(err)
	}
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
		console.error(err)
	}
}