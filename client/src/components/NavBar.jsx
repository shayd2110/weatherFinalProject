import React, { useContext } from "react";
import UserContext from "../context/user-context";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import { Links, LinksLoggedIn, Logo } from "./";

const Container = styled.div.attrs({
	className: "container",
})``;

const Nav = styled.nav.attrs({
	className: "navbar navbar-expand-lg navbar-light text-uppercase fixed-top ",
})`
	margin-bottom: 20 px;
`;

function NavBar() {
	const context = useContext(UserContext).userData;
	return (
		<Container>
			<Nav>
				<Logo />
				{context.loggedIn ? <LinksLoggedIn /> : <Links />}
			</Nav>
		</Container>
	);
}

export default NavBar;
