

const Cart = (prevState = [],{ type, payload }) => {
	switch(type){
	case '@cart/saveAll':
		return [
			...payload,
		]
	case '@cart/removeOne':
		return prevState.filter(elem => elem._id !== payload._id)

	case '@cart/add':
		return [ ...prevState, payload ]
	default:
		return prevState
	}
}

export default Cart