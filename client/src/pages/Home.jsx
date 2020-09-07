import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { Wellcom, PortfolioGrid, Footer } from "../components";
import api from "../api";

function Home() {
	const { userData, setUserData } = useContext(UserContext);
	var userFavoritesCities = [];
	// console.log("userData1", userData);
	api.getFavoritesByUserId(userData.user._id).then((res) => {
		res.data.data.map((list) => {
			console.log("lala", list.cityId);
			api.getCityById(list.cityId).then((res) => {
				// console.log("res.data", res.data.data[0]);
				userFavoritesCities.concat(res.data.data[0]);
			});
		});
	});

	console.log("f", userFavoritesCities);

	// const [selectedCities, setSelectedCities] = useState(
	//   api.getFavoritesByUserId(userData.user.id).data
	// );

	return (
		// <ScrollableAnchor id="home">
		<div>
			<Wellcom />
			<PortfolioGrid selectedCities={[]} />
			{/* <About /> */}
			{/* <Map /> */}
			<Footer />
		</div>
		// </ScrollableAnchor>
	);
}

export default Home;
