import { useCallback } from 'react'

import useCart from '../../hooks/useCart'
import useUser from '../../hooks/useUser'

import { IoBagAddOutline, IoBagAdd } from 'react-icons/io5'

function BtnAddToCart({idProduct}) {

    const { cartItems, addNew, remove } = useCart()
    const { isLogged } = useUser()

    const isAdded = useCallback(
        () => {
            if(!isLogged) return false
            let itemCart = cartItems.find( (cartProduct)=> cartProduct.product._id == idProduct )
            return itemCart
        }   
        ,[cartItems]
    )

	const handleButton = () => {
        if(!isLogged ) return alert('Debe Iniciar Sesion ')
        const item = isAdded()
        if( !item ){
            addNew(idProduct)
        }else{
            remove(item._id)
        }
	}
    return (

        <>
            { !isAdded() ? 
                <IoBagAddOutline 
                    role="button"
                    onClick= { handleButton } 
                /> 
                : 
                <IoBagAdd 
                    role="button"
                    onClick= { handleButton } 
                />
            }
        </>
       
    )
}

export default BtnAddToCart
