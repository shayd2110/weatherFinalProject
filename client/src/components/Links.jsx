/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Signup, Login } from "../pages";
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
