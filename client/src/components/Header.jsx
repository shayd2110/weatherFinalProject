import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../context/user-context";
import { Links, LinksLoggedIn, Logo } from "./";

import Navbar from "react-bootstrap/Navbar";

function Header() {
	const { userData } = useContext(UserContext);

	return (
		<Navbar bg="dark" expand="lg" sticky="top" variant="dark">
			<div className="container">
				<Logo />
				<Navbar.Brand>מזג-אוויר ישראל</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{userData.loggedIn ? <LinksLoggedIn /> : <Links />}
					{userData.loggedIn ? <Redirect to={"/home"} /> : null}
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default Header;
