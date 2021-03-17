import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/SignUp';
import NewOperation from './components/NewOperation';
import Home from './components/Home';

function App() {

	const [budget, setBudget] = useState(0);

	return (
		<Router>
			<Switch>
				<Route
					exact path='/'
					component={(() => <Home/>)}
				/>

				<Route
					exact path = '/login'
					component = {Login}
				/>

				<Route
					exact path = '/signup'
					component = {SignUp}
				/>
			</Switch>
		</Router>
	);
}

export default App;