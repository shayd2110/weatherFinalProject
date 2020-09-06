/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import { Copyright } from "./";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<footer className="footer text-center" id="about">
					<div className="container">
						<div className="row">
							{/* !-- Footer Location -- */}
							<div className="col-lg-3 mb-8 mb-lg-0">
								<h4 className="text-center mb-4">:כתובת</h4>
								<p className="lead mb-0">
									,קריית-שמונה
									<br />
									האצ"ל 20 - <br /> אחד-העם 9 -
								</p>
							</div>

							{/* !-- Footer Number -- */}
							<div className="col-lg-3 mb-8 mb-lg-0">
								<h4 className="text-center mb-4">:מספר</h4>
								<FaPhoneAlt />
								<p className="lead mb-0">
									<br />
									052-4764379 - אור
									<br />
									054-7303575 - דוד
								</p>
							</div>

							{/* !-- Footer Social Icons -- */}
							<div className="col-lg-3 mb-8 mb-lg-0">
								<h4 className="text-center mb-4">
									:מצא אותנו בפסייבוק
								</h4>
								<a
									className="btn btn-outline-light btn-social mx-1"
									href="https://www.facebook.com/or.izhari"
								>
									<FaFacebookF />
								</a>
								<a
									className="btn btn-outline-light btn-social mx-1"
									href="https://www.facebook.com/profile.php?id=100000274645145"
								>
									<FaFacebookF />
								</a>
							</div>

							{/* !-- Footer About Text -- */}
							<div className="col-lg-3">
								<h4 className="text-center mb-4">:קצת עלינו</h4>
								<p className="lead mb-0">
									.סטודנטים למדעי המחשב שנה אחרונה במכללת
									תלי-חי{" "}
								</p>
							</div>
						</div>
					</div>
				</footer>

				<Copyright />
			</div>
		);
	}
}

export default Footer;
