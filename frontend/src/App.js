import React, {useState, useEffect} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import Balance from './components/Balance';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NewOperation from './components/NewOperation';
import ListAllOperations from './components/ListAllOperations';
import InitialBalance from './components/InitialBalance';

function App() {

	const [budget, setBudget] = useState(0);

	return (
		<Router>
			<Switch>
				<Route
					exact path='/'
					component={(budget !== 0 ? () => <Balance budget={budget}/> : () => <InitialBalance setBudget={setBudget}/>)}
				/>

				<Route
					exact path = '/login'
					component = {Login}
				/>

				<Route
					exact path = '/signup'
					component = {SignUp}
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