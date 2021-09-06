import {  useDispatch, useSelector } from 'react-redux'
import { remove } from '../../services/cart'
import { Container } from './Styles'

function Cart() {
	const dispatch = useDispatch()
	const cartItems = useSelector((state) => state.Cart)
	const handleDelete = (id) => {
		remove(id).then((data) => dispatch({ type: '@cart/removeOne', payload: data }))
	}
    
	return (
		<Container>
			<h1>Carrito</h1>
			{ !cartItems.length && <span> No hay nada en el Carrito</span> }
			<ul>
				{ cartItems.map((item) => (
					<li key={item._id}>
						{ item.product.title }
						<button onClick={() => handleDelete(item._id) } >Eliminar</button>
					</li>
				)) }

			</ul>
		</Container>
	)
}

export default Cart
