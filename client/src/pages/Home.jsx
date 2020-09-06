import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { Wellcom, PortfolioGrid, Footer } from "../components";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCities: [
				{
					id: 1,
					url: "images/portfolio/jerusalem.jpg",
					name: "ירושלים",
					lat: "32.085018",
					lng: "34.780080",
				},
				{
					id: 2,
					url: "images/portfolio/haifa.jpg",
					name: "חיפה",
					lat: "31.767407",
					lng: "35.210380",
				},
				{
					id: 3,
					url: "images/portfolio/eilat.jpg",
					name: "אילת",
					lat: "31.767407",
					lng: "35.210380",
				},
				{
					id: 4,
					url: "images/portfolio/kiryat shmona.jpg",
					name: "קרית שמונה",
					lat: "31.767407",
					lng: "35.210380",
				},
				{
					id: 5,
					url: "images/portfolio/netanya.jpg",
					name: "נתניה",
					lat: "31.767407",
					lng: "35.210380",
				},
				{
					id: 6,
					url: "images/portfolio/tel aviv.jpg",
					name: "תל-אביב",
					lat: "31.767407",
					lng: "35.210380",
				},
			],
		};
	}
	render() {
		return (
			// <ScrollableAnchor id="home">
			<div>
				<Wellcom />
				<PortfolioGrid selectedCities={this.state.selectedCities} />
				{/* <About /> */}
				{/* <Map /> */}
				<Footer />
			</div>
			// </ScrollableAnchor>
		);
	}
}

export default Home;
