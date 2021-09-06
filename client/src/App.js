import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { getAll } from './services/cart'
import Actions from './store/actions'

function App(){ 
	const dispatch = useDispatch()

	useEffect(
		() => {
			getAll()
				.then((data) => dispatch(Actions.Cart.saveAll(data)))
				.catch((err) => console.error(err))
		},
		[dispatch],
	)


	return (
		<>
			<Header/>
			<Router>
				<Switch>
					<Route path="/">
						<Home/>
					</Route>
				</Switch>
			</Router>
		</>
    
	)
}

export default App