import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
	className: "collpase navbar-collapse",
})``;

const List = styled.div.attrs({
	className: "navbar-nav mr-auto",
})``;

const Item = styled.div.attrs({
	className: "collpase navbar-collapse",
})``;

class Links extends Component {
	render() {
		return (
			<React.Fragment>
				<Link
					className="navbar-brand text-white js-scroll-trigger"
					href="#page-top"
					to={"/sign-in"}
				>
					<a> מזג-אוויר ישראל </a>
				</Link>
				<Collapse>
					<List>
						<Item>
							<Link className="nav-link" to={"/sign-in"}>
								<a
									className="py-3 px-0 px-lg-3 rounded js-scroll-trigger text-white"
									href="#portfolio"
								>
									התחברות
								</a>
							</Link>
						</Item>
						<Item>
							<Link
								className="nav-link text-white"
								to={"/sign-up"}
							>
								<a
									className="py-3 px-0 px-lg-3 rounded js-scroll-trigger text-white"
									href="#portfolio"
								>
									הרשמה
								</a>
							</Link>
						</Item>
					</List>
				</Collapse>
			</React.Fragment>
		);
	}
}

export default Links;
