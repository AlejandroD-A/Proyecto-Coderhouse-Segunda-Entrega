import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingBasketLine, RiSearchLine } from 'react-icons/ri'
import { Header as HeaderStyle,
		Logo, 
		NavBar } 
		from './styles' 

import AsideContainer from '../AsideContainer'
import Cart from '../Cart'

import useUser from '../../hooks/useUser'


function Header() {
	const [showCart, setShowCart] = useState(false)
	const { isLogged, user, logout, getUser } = useUser()

	const handleLogout = async ()=>{
		await logout()
		alert('Ha cerrado sesion')
	}

	useEffect(() => {
		if(!isLogged){
			console.log('getting user')
			getUser()
		} 
	}, [])

	return (
		<>	
			<HeaderStyle>
				<Logo><Link to='/'>Plast</Link></Logo>
				<NavBar>
				{ isLogged ? 
					<>
						<li> <RiSearchLine/></li>
						<li onClick={()=> setShowCart(true)}><RiShoppingBasketLine/></li>
						<li> { user.email } </li>
						<li><a onClick={ handleLogout } >Logout</a></li>
					</>
				:
					<>
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/register">Register</Link></li>
					</>
					
				}
				</NavBar>
			</HeaderStyle>
			
			{ isLogged && 
			<AsideContainer state= {showCart} onClose = {()=> setShowCart(false)}>
				 <Cart />
			</AsideContainer>
			}
		</>
        

        
	)
}

export default Header
