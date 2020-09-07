import React, { Component } from "react";
import "../style/bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import Logo from "./Logo";
import Links from "./Links";

const Container = styled.div.attrs({
	className: "container",
})``;

const Nav = styled.nav.attrs({
	className: "navbar navbar-expand-lg navbar-light text-uppercase fixed-top ",
})`
	margin-bottom: 20 px;
`;

class NavBar extends Component {
	render() {
		return (
			<Container>
				<Nav>
					<Logo />
					<Links />
				</Nav>
			</Container>
		);
	}
}

export default NavBar;
