import useProducts from '../../hooks/useProducts'
import ProductCard from '../ProductCard'
import { BackNav, ProductList } from './Styles'

export default function Products() {
	const { products = [] } = useProducts()

	return (
		<BackNav>
			<span>/home</span>
			<ProductList>
				{ products.map((product) => (
					<ProductCard product = {product} key= {product._id} />
				))}
			</ProductList>
		</BackNav>
	
	)
}
