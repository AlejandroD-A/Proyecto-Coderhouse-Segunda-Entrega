

export const register = async (user)=> {
		const formData = new FormData()

		formData.append('email',user.email)
		formData.append('password',user.password)
		formData.append('name',user.name)
		formData.append('lastName',user.lastName)
		formData.append('age',user.age)
		formData.append('phone',user.phone)
		formData.append('avatar',user.avatar)

		console.log(formData)
		const res = await fetch('/auth/signup',{
			method: 'POST',
			body: formData
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

