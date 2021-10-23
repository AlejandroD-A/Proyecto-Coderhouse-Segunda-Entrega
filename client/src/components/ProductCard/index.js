import PropTypes from 'prop-types'

import BtnAddToCart from '../BtnAddToCart'

import { Card, ImgWrapper, ContentCard } from './Styles'

function ProductCard({ product }) {
	return (
		<Card>
			<ImgWrapper src={ product.thumbnail } >
			</ImgWrapper>
			<ContentCard>
				<h4>{ product.title }</h4>
				<p>{ product.description }</p>
				<h5>{ product.price }</h5>
				<BtnAddToCart idProduct = { product.id } />
			</ContentCard>
			
		</Card>
	)
}

ProductCard.propTypes = {
	product: PropTypes.object
}

export default ProductCard