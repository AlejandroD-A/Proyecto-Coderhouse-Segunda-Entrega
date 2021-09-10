export const save = (user)=>{
	return {
		type: '@user/save',
		payload: {...user, isLogged: true }
	}
}

export default {
	save
}