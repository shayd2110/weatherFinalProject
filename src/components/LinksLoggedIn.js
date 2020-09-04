import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/user-context";
import styled from "styled-components";
//import api from "../api";

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
	// const navbarStyle = {
	// 	float: "right !important",
	// 	marginRight: -15,
	// };

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
		<>
			<Link
				className=" navbar-header navbar-brand text-white js-scroll-trigger "
				href="#page-top"
				to={"/"}
			>
				<a> מזג-אוויר ישראל </a>
			</Link>
			<Collapse>
				<List>
					<Item>
						<Link className="nav-link" to={"/settings"}>
							<a
								className="py-3 px-0 px-lg-3 rounded js-scroll-trigger text-white"
								href="#portfolio"
							>
								הגדרות
							</a>
						</Link>
					</Item>
					<Item>
						<Link className="nav-link text-white">
							<a
								className="py-3 px-0 px-lg-3 rounded js-scroll-trigger text-white"
								onClick={logout}
							>
								התנתק/י
							</a>
						</Link>
					</Item>
					<Item>
						<a
							className=" py-3 px-0 px-lg-3 rounded js-scroll-trigger text-white"
							href="#portfolio"
						>
							ערים נבחרות
						</a>
					</Item>
					<Item>
						<a
							className="py-3 px-0 px-lg-3 rounded js-scroll-trigger text-white"
							href="#about"
						>
							אודות
						</a>
					</Item>
					<Item>
						<a
							className="py-3 px-0 px-lg-3 rounded js-scroll-trigger text-white"
							href="#contact"
						>
							מפת ערי ישראל
						</a>
					</Item>
					<Item>
						<a
							className="py-3 px-0 px-lg-3 rounded js-scroll-trigger text-white"
							href="#portfolio"
						>
							ערים נבחרות
						</a>
					</Item>
				</List>
			</Collapse>
		</>
	);
}
