import React, { Component } from "react";
import { Link } from "react-router-dom";

class LinkToLogin extends Component {
	render() {
		return (
			<React.Fragment>
				<p className="forgot-password text-right">
					משתמש רשום? <Link to={"/sign-in"}>התחבר/י</Link>
				</p>
			</React.Fragment>
		);
	}
}

export default LinkToLogin;
