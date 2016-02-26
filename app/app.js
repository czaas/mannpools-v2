import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { Wrapper } from './containers/wrapper.js';
import { Home } from './pages/home.js';
import { Services } from './pages/services.js';
import { Contact } from './pages/contact.js';

export class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Wrapper}>
					<IndexRoute component={Home} />
					<Route path='/services' component={Services} />
					<Route path='/contact' component={Contact} />
				</Route>
			</Router>
		);
	}
}
