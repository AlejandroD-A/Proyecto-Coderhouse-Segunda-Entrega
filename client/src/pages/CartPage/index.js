import useCart from 'hooks/useCart'
import { useCallback } from 'react'

function CartPage() {

    const { remove, cartItems, confirm } = useCart()

	const handleDelete = (id) => {
		remove(id)
	}

    const handleConfirm =  async () => {
        const orderData = await confirm()
        console.log(orderData)
        
    }

    const getTotal = useCallback(()=>{
        if(cartItems.length > 1){
            let total = 0
            cartItems.forEach(ele => {
                total = total + Number(ele.product.price)
            });
            return total
        }
        return cartItems[0].product?.price

    },[cartItems])

    return (
        <div>
            <h1>Carrito</h1>

			{ !cartItems.length && <span> No hay nada en el Carrito</span> }

			<ul>
				{ cartItems && cartItems.map((item) => (
					<li key={item._id}>
					    { item.product.title } ${ item.product.price }
						<button onClick={() => handleDelete(item._id) } >Eliminar</button>
					</li>
				)) }

			</ul>
             { cartItems.length > 0 &&  <p>Total: ${ getTotal() }</p> }
            
            {cartItems.length > 0 && <button onClick = {handleConfirm}>Confirmar Pedido</button>  } 
        </div>
    )
}

export default CartPage
