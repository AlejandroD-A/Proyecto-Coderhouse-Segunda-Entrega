export const saveAll = (cartItems) => ({
	type: '@cart/saveAll',
	payload: cartItems,
})
export const add = (item) => ({
	type: '@cart/add',
	payload: item,
})

export default {
	saveAll,
	add,
}
