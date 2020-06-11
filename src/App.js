import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import AllWorkshops from './components/AllWorkshops';
import WorkshopOverview from './components/WorkshopOverview';
import WorkshopFeedback from './components/WorkshopFeedback';
import WorkshopWorksheet from './components/WorkshopWorksheet';
import WorkshopContent from './components/WorkshopContent';

import './App.css';

function App() {
	//   const [currentWorkshop, setCurrentWorkshop] = React.useState('reclXZv3JtH77KpzW');
	return (
		<>
			<Router>
				<div className="App">
					<Nav />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/workshops" component={AllWorkshops} />
						<Route path="/workshop/overview/:ID" component={WorkshopOverview} />
						<Route exact path="/workshop/feedback/:ID" component={WorkshopFeedback} />
						<Route exact path="/workshop/content/:ID" component={WorkshopContent} />
						<Route exact path="/workshop/worksheet/:ID" component={WorkshopWorksheet} />
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
