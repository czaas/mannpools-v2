import React from 'react';

export class HomeContent extends React.Component {
	render() {
		return (
			<section id="homePage">
				<div className="main">
					<h1 className="important">Serving California's Central Coast</h1>
					<img src="img/about.jpg" alt="Owner, Scott Mann, servicing a pool" />

					<div className="about">
						<p><span className="name">Mann Pools</span> is proud to offer California's Central Coast, professional pool maintenance, repairs, new installations, and management, at affordable rates. We serve the communities of San Luis Obispo, Los Osos, and, the Five Cities. Take the hassle out of pool ownership. Contact Mann Pools and spend more time enjoying your pool.</p>
					</div>
						<p className="important">Contact us for a free service estimate</p>
				</div>
				<div className="testimonials">
					<p>
						<span id="testimonials">
						
						</span>
					</p>
				</div>
				<div className="main">
					<div className="mainFeature">
						<div className="leftSide">
							<div className="trait">
								<h3>Knowledgeable</h3>
								<p>We regularly attend trade seminars and manufacturer's presentations, as well as subscribing to industry publications, to keep up with current trends and technology. We also consult with a host of professional's relating to the pool and spa industries.</p>	
							</div>
							<div className="trait">
								<h3>Affordable</h3>
								<p>Mann Pools provides quality and experience at reasonable rates. We have grown solely by word of mouth from great clients and other professionals in the pool and spa industries.</p>	
							</div>
							<div className="trait">
								<h3>Commercial Pool Service</h3>
								<p>We are experienced with and currently service pools, spas, and water features for home owners associations, hotels, apartments, and estates. We offer consultations regarding energy savings (audits), water quality management and solutions.</p>	
							</div>
						</div>

						<div className="rightSide">
							<div className="trait">
								<h3>Experienced</h3>
								<p>Mann Pools was started in 1997 after working residential and commercial pools for 2 years under supervision from reputable veterans in the field. This is a family-owned and operated small business based in Pismo Beach, California. We are familiar and work with with complex systems, automation, and alternative sanitation.  We offer water quality management and related troubleshooting. We do know how to fix issues and always give the customer options. No Sales Pressure Guaranteed.</p>	
							</div>
							
							<div className="trait">
								<h3>Residential Pool Service</h3>
								<p>We provide homeowners with a service plan that meets their individual needs with cleaning, professional water testing and analysis. Our maintenance plans include all chemicals and filter cleaning for one low flat rate.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
