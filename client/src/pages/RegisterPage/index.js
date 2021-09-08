import { useState } from 'react'
import { register } from '../../services/auth'

function RegisterPage() {
	const [ formData, setFormData ] = useState({})

	const handleChange = (e)=> {
		setFormData({...formData,[e.target.name]: e.target.value })
	}

	const submitForm = async (e) => {
		try{
			e.preventDefault()
            
			const user = await register(formData)

			console.log(user)
		}catch(err){
			console.log(err)
		}
	}

	return (
		<div>
			<h1>Registro</h1>

			<form>
				<div>
					<label htmlFor="email">Email:</label>
					<input type="text" placeholder ="your email" name= "email" onChange ={handleChange} />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input type="password" placeholder ="your password" name= "password" onChange ={handleChange} />
				</div>
				
				<div>
					<label htmlFor="name">Nombre</label>
					<input type="text" placeholder ="your name" name= "name" onChange ={handleChange} />
				</div>

				<div>
					<label htmlFor="lastName">Apellido:</label>
					<input type="text" placeholder ="your lastName" name= "lastName" onChange ={handleChange} />
				</div>
				<div>
					<label htmlFor="age">Edad:</label>
					<input type="number" placeholder ="your Age" name= "age" onChange ={handleChange} />
				</div>

				<div>
					<label htmlFor="phone">Numero de Telefono:</label>
					<input type="number" placeholder ="your phone" name= "phone" onChange ={handleChange} />
				</div>

				<div>
					<label htmlFor="avatar">Avatar:</label>
					<input type="text" placeholder ="your avatar" name= "avatar" onChange ={handleChange} />
				</div>

				<button onClick={submitForm}>Registrame</button>

			</form>
		</div>
	)
}

export default RegisterPage
