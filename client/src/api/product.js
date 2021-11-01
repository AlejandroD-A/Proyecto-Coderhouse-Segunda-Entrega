import { axiosInstance } from './index'

export const getAll = async ()=>{
	try{
		const { data, status } = await axiosInstance.get('/productos')
		if(status != 200 ) return []
		return data.productos

	}catch(err){
		console.error(err)
	}
}