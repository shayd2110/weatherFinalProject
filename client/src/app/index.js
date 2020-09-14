import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {
	Header,
	Wellcom,
	Footer,
	Copyright,
	PortfolioMap,
	Waiting,
} from "../components";
import { UsersList, Signup, Login, Home } from "../pages";
import UserContext from "../context/user-context";
import UserFavoriteContext from "../context/userFavorite-context";
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

	const [userFavoriteData, setUserFavoriteData] = useState({
		render: false,
	});

	useEffect(() => {
		const checkLoggedIn = async () => {
			let token = localStorage.getItem("auth-token");
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
				<UserFavoriteContext.Provider
					value={{ userFavoriteData, setUserFavoriteData }}
				>
					<Header />
					{userData.loggedIn ? (
						<>
							<Wellcom />
							<Switch>
								<Route path="/home" exact component={Home} />
								<Route
									path="/home-map"
									exact
									component={PortfolioMap}
								/>
								<Route
									path="/home-settings"
									exact
									component={Waiting}
								/>
							</Switch>
							<Footer />
						</>
					) : (
						<>
							<Redirect to={"/sign-in"} />
							<AuthWrapper>
								<AuthInner>
									<Switch>
										<Route
											exact
											path="/"
											component={Login}
										/>
										<Route
											path="/sign-in"
											component={Login}
										/>
										<Route
											path="/sign-up"
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
				</UserFavoriteContext.Provider>
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
