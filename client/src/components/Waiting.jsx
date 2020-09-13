import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FaStar } from "react-icons/fa";

class Waiting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reRender: false,
		};
	}

	componentDidMount() {
		// this.timer = setInterval(() => {
		//   this.setState({ reRender: true });
		// }, 10000); // 3000ms = three seconds
	}

	render() {
		return !this.state.reRender ? (
			<React.Fragment>
				<section className="page-section portfolio" id="selected">
					<div className="container">
						<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
							!נעול - הגדרות
						</h2>

						{/* -- Icon Divider -- */}
						<div className="divider-custom">
							<div className="divider-custom-line"></div>
							<div className="divider-custom-icon">
								<FaStar />
							</div>
							<div className="divider-custom-line"></div>
						</div>

						<div className="row">
							<div className="modal-body text-center">
								<div className="container">
									<div className="row justify-content-center">
										<div className="col-lg-8">
											<div className="app-title">
												<p>
													.להמשך, אנא בחר ערים נבחרות
													או מפת ערי ישראל
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		) : (
			<Redirect to={"/home"} />
		);
	}
}

export default Waiting;
