import React,{ useState } from 'react'
import { login } from '../../services/auth'

function LoginPage() {
	const [ formData, setFormData ] = useState({})

	const handleChange = (e)=> {
		setFormData({...formData,[e.target.name]: e.target.value })
	}

	const submitForm = async (e) => {
		try{
			e.preventDefault()
            
			const user = await login(formData)
			console.log(user)
		}catch(err){
			console.log(err)
		}
	}

	return (
		<div>
			<h1>Ingreso</h1>

			<form>
				<div>
					<label htmlFor="email">Email:</label>
					<input type="text" placeholder ="your email" name= "email" onChange ={handleChange} />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input type="password" placeholder ="your password" name= "password" onChange ={handleChange} />
				</div>
				
				
				<button onClick={submitForm}>Login</button>

			</form>
		</div>
	)
}


export default LoginPage
