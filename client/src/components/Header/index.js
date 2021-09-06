import { useState } from 'react'
import Cart from '../Cart'
import { RiShoppingBasketLine, RiSearchLine } from 'react-icons/ri'
import { Header as HeaderStyle,
	Logo, 
	NavBar } from './styles' 
import AsideContainer from '../AsideContainer'

function Header() {
	const [showCart, setShowCart] = useState(false)
	return (
		<>
			<HeaderStyle>
				<Logo>Plast</Logo>
				<NavBar>
					<li><RiSearchLine/></li>
					<li onClick={()=> setShowCart(true)}><RiShoppingBasketLine/></li>
				</NavBar>
			</HeaderStyle>


			<AsideContainer state= {showCart} onClose = {()=> setShowCart(false)}>
				<Cart />
			</AsideContainer>
            
		</>
        

        
	)
}

export default Header
