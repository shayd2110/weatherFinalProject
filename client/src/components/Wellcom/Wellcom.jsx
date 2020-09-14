import React from "react";
import { FaStar } from "react-icons/fa";

function Wellcom() {
	return (
		<div id="home">
			<header className="masthead bg-primary text-white text-center">
				<div className="container d-flex align-items-center flex-column">
					{/* <!-- Masthead Avatar Image --> */}
					<img
						className="masthead-avatar mb-5"
						src="images/clouds-1293230.png"
						alt=""
					/>

					{/* <!-- Masthead Heading --> */}
					<h1 className="masthead-heading text-uppercase mb-0">
						ברוכים הבאים למזג-אוויר
						<br /> ישראל
					</h1>

					{/* <!-- Icon Divider --> */}
					<div className="divider-custom divider-light">
						<div className="divider-custom-line" />
						<div className="divider-custom-icon">
							{/* <FontAwesomeIcon icon={faStar} /> */}
							<FaStar />
						</div>
						<div className="divider-custom-line" />
					</div>

					{/* <!-- Masthead Subheading --> */}
					<p className="masthead-subheading font-weight-light mb-0">
						,בלחיצה תקבלו תחזיות מזג-אוויר בישראל
						<br /> .לפי הערים המעודפות עליכם
					</p>
				</div>
			</header>
		</div>
	);
}

export default Wellcom;
