/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import Scroll from "react-scroll";
import UserContext from "../context/user-context";
import { Links, LinksLoggedIn, Logo } from "./";

import Navbar from "react-bootstrap/Navbar";

function Header() {
	const { userData, setUserData } = useContext(UserContext);
	const ScrollLink = Scroll.ScrollLink;

	return (
		<Navbar bg="dark" expand="lg" sticky="top" variant="dark">
			<div className="container">
				<Logo />
				<Navbar.Brand>מזג-אוויר ישראל</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{userData.loggedIn ? <LinksLoggedIn /> : <Links />}
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default Header;
