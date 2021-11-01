import { axiosInstance } from "./index"


export const register = async (user)=> {
	try{
		const formData = new FormData()

		formData.append('email',user.email)
		formData.append('password',user.password)
		formData.append('name',user.name)
		formData.append('lastName',user.lastName)
		formData.append('age',user.age)
		formData.append('phone',user.phone)
		formData.append('avatar',user.avatar)

		const res = await axiosInstance.post(`/api/auth/signup`,{
			body: formData
		})

		return res.data.user
	}catch(err){
		console.error(err)
	}
		
}

export const login = async (user)=> {
	try{
		const res = await axiosInstance.post(`/auth/login`,user)
		return res.data

	}catch(err){
		throw err 
	}
}

export const logout = async ()=> {
	try{
		//TO DO!
		return jsonData
	}catch(err){
		throw err 
	}
}

export const getUser = async (token)=> {
	try{
		console.log(token)
		const res = await axiosInstance.get(`auth/user`)
		return res.data
	}catch(err){
		throw err 
	}
}
