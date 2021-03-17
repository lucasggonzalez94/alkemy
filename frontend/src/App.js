import React, {useState, useEffect} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import Balance from './components/Balance';
import Login from './components/Login';
import NewOperation from './components/NewOperation';
import ListAllOperations from './components/ListAllOperations';

function App() {
	return (
		<Router>
			<Switch>
				<Route
					exact path='/'
					component={Balance}
				/>

				<Route
					exact path = '/login'
					component = {Login}
				/>

				<Route
					exact path = '/new'
					component = {NewOperation}
				/>

				<Route
					exact path = '/all'
					component = {ListAllOperations}
				/>
			</Switch>
		</Router>
	);
}

export default App;