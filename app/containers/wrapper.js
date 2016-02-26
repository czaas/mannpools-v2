import React from 'react';

import { Header } from '../includes/header.js';

export class Wrapper extends React.Component {
	render() {
		return (
			<div>
				<h1>Wrapper</h1>
				<Header />
				{this.props.children}
			</div>
		);
	}
}