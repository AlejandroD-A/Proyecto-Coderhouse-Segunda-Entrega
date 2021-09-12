import PropTypes from 'prop-types'

import BtnAddToCart from '../BtnAddToCart'

import { Card } from './Styles'

function ProductCard({ product }) {
	return (
		<Card>
			<BtnAddToCart idProduct = { product._id } />
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