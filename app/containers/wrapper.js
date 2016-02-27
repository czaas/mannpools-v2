import React from 'react';

import { Header } from '../includes/header.js';

export class Wrapper extends React.Component {
	render() {
		return (
			<div>
				<img src='/dist/images/logo.png' />
				<Header />
				{this.props.children}
			</div>
		);
	}
}