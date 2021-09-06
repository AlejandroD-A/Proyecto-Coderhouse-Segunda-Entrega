import { useDispatch,useSelector } from 'react-redux'
import { useEffect} from 'react'
import { getAll } from '../services/product'
import Actions from '../store/actions'

export default function useProducts(){
	const dispatch = useDispatch()
	const products = useSelector((state) => state.Products)

	useEffect( ()=>{
		getAll().then( data => {
			dispatch(Actions.Products.saveAll(data))
		}).catch(err => console.log(err))
	},[dispatch])
    
	return { products }
}