import { useDispatch,useSelector } from 'react-redux'
import { useState, useEffect, useCallback } from 'react'
import { getAll, remove as removeService } from '../services/cart'
import Actions from '../store/actions'

export default function useCart(){

	const dispatch = useDispatch()
	const cartItems = useSelector((state) => state.Cart)

    const loadCart = useCallback(()=>{
            getAll()
            .then( data => { 
                dispatch(Actions.Cart.saveAll(data))
             })
            .catch(err => console.log(err))
		
	},[dispatch])
    
    const remove = useCallback((id) => {
        removeService(id)
            .then((data) => dispatch({ type: '@cart/removeOne', payload: data }))
            .catch(err => console.log(err))
    },[dispatch])

	return { loadCart, cartItems, remove}
}