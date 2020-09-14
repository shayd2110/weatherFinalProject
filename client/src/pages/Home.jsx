import React, { useContext, useState } from "react";
import UserContext from "../context/user-context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PortfolioGrid, PortfolioMap } from "../components";
import api from "../api";
import { useEffect } from "react";

function Home() {
	const { userData, setUserData } = useContext(UserContext);
	var [userFavoritesCities, setUserFavoritesCities] = useState([
		{},
		{},
		{},
		{},
		{},
		{},
	]);

	useEffect(() => {
		api.getFavoritesByUserId(userData.user._id).then((firstRes) => {
			for (let index = 0; index < firstRes.data.data.length; index++) {
				api.getCityById(firstRes.data.data[index].cityId).then(
					(res) => {
						const cityObj = res.data.data[0];
						userFavoritesCities[index] = {
							url: cityObj.image,
							id: index + 1,
							name: cityObj.name,
							lat: cityObj.lat,
							lng: cityObj.lon,
							value: firstRes.data.data[index].cityId,
						};
						setUserFavoritesCities([...userFavoritesCities]);
					}
				);
			}
			setUserData({
				loggedIn: userData.loggedIn,
				token: userData.token,
				user: {
					_id: userData.user._id,
					firstName: userData.user.firstName,
					lastName: userData.user.lastName,
					admin: userData.user.admin,
					favoritesCities: userFavoritesCities,
				},
			});
		});
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route
						path="/home-map"
						exact
						component={() => <PortfolioMap />}
					/>
					<Route
						path="/home"
						exact
						component={() => (
							<PortfolioGrid
								selectedCities={userFavoritesCities}
							/>
						)}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default Home;
