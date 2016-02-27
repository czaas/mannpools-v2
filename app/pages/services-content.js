import React from 'react';

export class ServicesContent extends React.Component {
	render() {
		return (
			<section className="main">
				<div className="intro">
					<p><span className='name'>Mann Pools</span> enjoys providing our clients with the highest levels of professional service. We employ decades of experience, working directly with pool builders/remodelers, and experts in all fields related to recreational water.</p>
				</div>
				<p className="important">Please call for a free service estimate. This is the best way to determine an appropriate service protocol; options are available so you can make the right choice.</p>
				<div className="mainFeature">
					<div className="leftSide">
					<div className="service residential">
						<h2 className="important">Residential Services</h2>
						<ul>
							<li>Weekly Residential Service</li>
							<li>Water Testing and Analysis &ndash; Chemicals Included</li>
							<li>Net and Brush pool</li>
							<li>Skimmer/Pump Basket Cleaning</li>
							<li>Adjust Automatic Pool Sweep (where applicable)</li>
							<li>Visual Inspection of Equipment</li>
							<li>Filter Pressure Check/Clean as needed</li>
							<li>Vacuum as needed</li>
						</ul>
					</div>

					<div className="service commercial">
						<h2 className="important">Commercial Services</h2>
						<p>Our services cover, weekly maintenance, water and equipment management, repairs, installations, and ideas to save on energy and chemical consumption.</p>
						<p>Mann Pools is experienced with: chlorine generators, Ozone, Ionizers, Ultraviolet systems, and automated pH and sanitation controllers.</p>
						<p>We communicate routinely with the San Luis Obispo County's Environmental Health Department regarding public health related to water quality, safety, and record keeping.</p>
						<p>We are Pentair factory trained for variable speed pump installations.</p>
					</div>
					</div>
					<div className="rightSide">
						<div className="addService">
							<h2 className="important">Additional Services</h2>
							<ul>
								<li>Water Analysis: We use a Taylor digital photometer calibrated before each use for accuracy. Lab testing is available for source water. </li>
								<li>Equipment and plumbing repairs</li>
								<li>New installations</li>
								<li>Equipment upgrades &ndash; Energy Efficient Pumps & Heaters, Filters, Automation & Controls, Cleaners, Ultraviolet Systems.</li>
								<li>Building/ Remodel Referrals to Quality Contractors</li>
								<li>Filter Cleans</li>
								<li>Pool Clean Ups</li>
								<li>Troubleshooting</li>
								<li>Leak Detection</li>
								<li>Bead Blasting</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}