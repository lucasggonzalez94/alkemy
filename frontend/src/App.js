import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/SignUp';
import NewOperation from './components/NewOperation';
import Home from './components/Home';
import EditOperation from './components/EditOperation';

function App() {

	const [consult, setConsult] = useState(true);
	const [budget, setBudget] = useState(0);

	return (
		<Router>
			<Switch>
				<Route
					exact path='/'
					component={() => <Home
							consult={consult}
							budget={budget}
							setConsult={setConsult}
							setBudget={setBudget}
						/>}
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
					component = {() => <NewOperation
							setConsult={setConsult}
							budget={budget}
							setBudget={setBudget}
						/>}
				/>

				<Route
					exact path = '/edit'
					component = {EditOperation}
				/>
			</Switch>
		</Router>
	);
}

export default App;