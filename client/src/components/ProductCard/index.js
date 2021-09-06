import PropTypes from 'prop-types'
import { useDispatch,useSelector } from 'react-redux'

import { addNew } from '../../services/cart'

import Actions from '../../store/actions'
import { RiShoppingBasketLine } from 'react-icons/ri'

import { Card } from './Styles'

function ProductCard({ product }) {

	const dispatch = useDispatch()
	const cartItems = useSelector(state => state.Cart)

	const isAdded = (id)=>{
		return cartItems.some(({product})=> product._id == id )
	}
	const handleClick = (id) => {
		addNew(id).then((item) => dispatch(Actions.Cart.add(item)))
	}
    
	return (
		<Card>
			<RiShoppingBasketLine 
				className={`btn ${isAdded(product._id) && 'disabled'}`}
				onClick= { () => handleClick(product._id) } 
				disabled={ isAdded(product._id) } />	
			<img src={ product.thumbnail } />
			<h4>{ product.title }</h4>
			<p>{ product.description }</p>
			<h5>{ product.price }</h5>
		</Card>
	)
}

ProductCard.propTypes = {
	product: PropTypes.object
}

export default ProductCard