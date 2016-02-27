import React from 'react';

import { HomeContent } from './home-content.js';

export class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>Home page</h1>
				<HomeContent />
			</div>
		);
	}
}
