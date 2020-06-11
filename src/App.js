import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Nav from './components/Nav';
import AllWorkshops from './components/Pages/AllWorkshops/AllWorkshops';
import WorkshopOverview from './components/Pages/WorkshopOverview';
import WorkshopFeedback from './components/Pages/WorkshopFeedback';
import WorkshopWorksheet from './components/Pages/WorkshopWorksheet';
import WorkshopContent from './components/Pages/WorkshopContent';
// import Home from './components/Pages/Home/Home'
// import Nav from './components/Pages'

import './App.css';

function App() {
	//   const [currentWorkshop, setCurrentWorkshop] = React.useState('reclXZv3JtH77KpzW');
	return (
		<>
			<Router>
				<div className="App">
					<Nav />
					<main>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/workshops" component={AllWorkshops} />
							<Route exact path="/workshop/overview/:ID" component={WorkshopOverview} />
							<Route exact path="/workshop/feedback/:ID" component={WorkshopFeedback} />
							<Route exact path="/workshop/content/:ID" component={WorkshopContent} />
							<Route exact path="/workshop/worksheet/:ID" component={WorkshopWorksheet} />
						</Switch>
					</main>
				</div>
			</Router>
		</>
	);
}

export default App;
