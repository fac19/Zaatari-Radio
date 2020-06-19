import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import './assets/fonts/DINCondensed-Bold.ttf';
import 'bootstrap/dist/css/bootstrap.min.css';

if (process.env.NODE_ENV !== 'production') {
	import('react-axe').then((axe) => {
		axe.default(React, ReactDOM, 1000);
		ReactDOM.render(<App />, document.getElementById('root'));
	});
} else {
	ReactDOM.render(<App />, document.getElementById('root'));
}
