import React from 'react';
import { Link } from 'react-router';

export class Header extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/services'>Services</Link></li>
					<li><Link to='/contact'>Contact</Link></li>
				</ul>
			</div>
		);
	}
}
