import { useState, useEffect } from 'react'
import useUser from '../../hooks/useUser'
import { useHistory } from 'react-router-dom'

function RegisterPage() {
	const [ formData, setFormData ] = useState({})
	const { register, loading, error, isLogged } = useUser()
	const history = useHistory()

	useEffect(() => {
		if(isLogged){ 
		  history.push('/')}
	  },[isLogged])

	const handleChange = (e)=> {
		setFormData({...formData,[e.target.name]: e.target.value })
	}

	const submitForm = async (e) => {
		e.preventDefault()
		await register(formData)
	}


	return (
		<div>
			<h1>Registro</h1>
			{ loading && <span>Loading...</span>}
			{ error && <span> { error }</span> }
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

				<button onClick={submitForm} disabled={ loading }>Registrame</button>

			</form>
		</div>
	)
}

export default RegisterPage
