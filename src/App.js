import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import AllWorkshops from './components/AllWorkshops';
import WorkshopOverview from './components/WorkshopOverview';
import WorkshopFeedback from './components/WorkshopFeedback';
import WorkshopWorksheet from './components/WorkshopWorksheet';
import WorkshopContent from './components/WorkshopContent';

import './App.css';

function App() {
	return (
		<>
			<Router>
				<div className="App">
					{/* <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/workshops" component={AllWorkshops} />
						<Route exact path="/workshop/overview/:ID">
							<WorkshopOverview />
						</Route>
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
