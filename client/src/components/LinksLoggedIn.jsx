import React, { useContext } from "react";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import { Map } from "../pages";
import Nav from "react-bootstrap/Nav";
import UserContext from "../context/user-context";
import Scroll from "react-scroll";
import styled from "styled-components";
import api from "../api";

const Collapse = styled.div.attrs({
	className: "collpase navbar-collapse",
})``;

const List = styled.div.attrs({
	className: "navbar-nav mr-auto",
})``;

const Item = styled.div.attrs({
	className: "collpase navbar-collapse",
})``;

export default function Links() {
	const { userData, setUserData } = useContext(UserContext);
	const ScrollLink = Scroll.ScrollLink;
	console.log("userData", userData);
	const logout = () => {
		setUserData({
			loggedIn: false,
			token: undefined,
			user: undefined,
		});
		localStorage.setItem("auth-token", "");
	};

	return (
		<ul className="navbar-nav ml-auto">
			<Nav.Item as="li">
				<Nav.Link>ערים נבחרות</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link>מפת ערי ישראל</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link>אודות</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link>הגדרות</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link onClick={logout}>
					<Link
						to={"/sign-in"}
						style={{ color: "inherit", textDecoration: "inherit" }}
					>
						התנתק/י
					</Link>
				</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link disabled>שלום {userData.user.firstName}</Nav.Link>
			</Nav.Item>
		</ul>
	);
}
