import React, { Component, useState, useEffect } from "react";

import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import { Header, Copyright } from "../components";
import { UsersList, Signup, Login, UsersUpdate, Home } from "../pages";
import UserContext from "../context/user-context";
import api from "../api";

import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const AuthWrapper = styled.div.attrs({
	className: "auth-wrapper  bg-primary",
})``;

const AuthInner = styled.div.attrs({
	className: "auth-inner text-right",
})``;

function App() {
	const [userData, setUserData] = useState({
		loggedIn: false,
		token: undefined,
		user: undefined,
	});

	useEffect(() => {
		const checkLoggedIn = async () => {
			let token = localStorage.getItem("auth-token");
			console.log("token:", token);
			if (token === null) {
				localStorage.setItem("auth-token", "");
				token = "";
			}
			const payload = { token };
			api.tokenIsValid(payload).then((res) => {
				if (res.data.success) {
					api.getUserByIdAfterAuth(payload).then((res) => {
						setUserData({
							loggedIn: true,
							token: token,
							user: {
								_id: res.data.data._id,
								firstName: res.data.data.firstName,
								lastName: res.data.data.lastName,
								admin: res.data.data.admin,
							},
						});
					});
				}
			});
		};

		checkLoggedIn();
	}, []);

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ userData, setUserData }}>
				<Header />
				{console.log("loggedIn: ", userData.loggedIn)}
				{userData.loggedIn ? (
					<>
						{/* <NavBar /> */}
						<Switch>
							<Route path="/home" exact component={Home} />
						</Switch>
						{/* <Link to={"./Home"}> </Link> */}
					</>
				) : (
					<>
						<AuthWrapper>
							<AuthInner>
								<Switch>
									<Route
										exact
										path="/"
										exact
										component={Login}
									/>
									<Route
										path="/sign-in"
										exact
										component={Login}
									/>
									<Route
										path="/sign-up"
										exact
										component={Signup}
									/>
								</Switch>
							</AuthInner>
						</AuthWrapper>
						<Switch>
							<Route
								path="/users/list"
								exact
								component={UsersList}
							/>
						</Switch>
						<Copyright />
					</>
				)}
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
