import { useState, useCallback } from 'react'

import useCart from 'hooks/useCart'

import { IoBagAddOutline, IoBagAdd } from 'react-icons/io5'

function BtnAddToCart({idProduct}) {
    const { cartItems, addNew, remove } = useCart()

    const isAdded = useCallback(
        () => {
            let itemCart = cartItems.find( (cartProduct)=> cartProduct.product._id == idProduct )
            return itemCart
        }   
        ,[cartItems]
    )

	const handleButton = () => {

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
