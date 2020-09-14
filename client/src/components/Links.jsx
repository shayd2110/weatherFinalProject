import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

class Links extends Component {
	render() {
		return (
			<ul className="navbar-nav ml-auto">
				<Nav.Item as="li">
					<Nav.Link>
						<Link
							to={"/sign-in"}
							style={{
								color: "inherit",
								textDecoration: "inherit",
							}}
						>
							התחברות
						</Link>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item as="li">
					<Nav.Link>
						<Link
							to={"/sign-up"}
							style={{
								color: "inherit",
								textDecoration: "inherit",
							}}
						>
							הרשמה
						</Link>
					</Nav.Link>
				</Nav.Item>
			</ul>
		);
	}
}

export default Links;
