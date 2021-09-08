import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

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
					<Route component={Home} exact path="/" />
					<Route component={RegisterPage} exact path="/register" />
					<Route component={LoginPage} exact path="/login" />
				</Switch>
			</Router>
		</>
    
	)
}

export default App