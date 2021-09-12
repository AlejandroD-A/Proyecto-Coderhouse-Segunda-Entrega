

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
		const res = await fetch('/auth/login',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		const jsonData = await res.json()
		return jsonData

	}catch(err){
		throw err 
	}
}

export const logout = async ()=> {
	try{
		const res = await fetch('/auth/logout')
		const jsonData = await res.json()
		if (!res.ok) throw new Error('Ha ocurrido un Error')
		return jsonData
	}catch(err){
		throw err 
	}
}

export const getUser = async ()=> {
	try{
		const res = await fetch('/auth/user')
		const jsonData = await res.json()
		if (!res.ok) throw new Error('Ha ocurrido un Error')
		return jsonData
	}catch(err){
		throw err 
	}
}

