import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../components/pages/Home/Home';
import Nav from '../components/shared/Nav/Nav';
import AllWorkshops from '../components/pages/AllWorkshops/AllWorkshops';
import WorkshopOverview from '../components/pages/WorkshopOverview/WorkshopOverview';
// import WorkshopWorksheet from './components/Pages/WorkshopWorksheet';
import WorkshopContent from '../components/pages/WorkshopContent/WorkshopContent';
import Worksheets from '../components/pages/Worksheets/Worksheets';
import Feedback from '../components/pages/Feedback/Feedback';

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
							<Route exact path="/workshop/content/:ID" component={WorkshopContent} />
							{/* <Route exact path="/workshop/worksheet/:ID" component={WorkshopWorksheet} /> */}
							<Route exact path="/workshop/feedback/:ID" component={Feedback} />
							<Route exact path="/workshop/worksheets/:ID" component={Worksheets} />
							<Route exact path="/workshop/feedback/:ID" component={Feedback} />
						</Switch>
					</main>
				</div>
			</Router>
		</>
	);
}

export default App;
