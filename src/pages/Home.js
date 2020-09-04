/*eslint-disable*/
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "../serviceWorker";
import NavBar from "../components/NavBar";
import WideSectionHeader from "../components/WideSectionHeader";
import PortfolioList from "../components/PortfolioList";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Links, LinksLoggedIn, Logo } from ".";

function Home() {
	const posts = [
		{
			id: 1,
			url: "img/portfolio/jerusalem.jpg",
			name: "jerusalem",
			lat: "31.767407",
			lng: "35.210380",
		},
		{
			id: 2,
			url: "img/portfolio/haifa.jpg",
			name: "haifa",
			lat: "31.767407",
			lng: "35.210380",
		},
		{
			id: 3,
			url: "img/portfolio/eilat.jpg",
			name: "eilat",
			lat: "31.767407",
			lng: "35.210380",
		},
		{
			id: 4,
			url: "img/portfolio/kiryat shmona.jpg",
			name: "kiryat shmona",
			lat: "31.767407",
			lng: "35.210380",
		},
		{
			id: 5,
			url: "img/portfolio/netanya.jpg",
			name: "netanya",
			lat: "31.767407",
			lng: "35.210380",
		},
		{
			id: 6,
			url: "img/portfolio/tel aviv.jpg",
			name: "tel aviv.",
			lat: "31.767407",
			lng: "35.210380",
		},
	];

	return (
		<div>
			<h3>moo</h3>
			<NavBar />
			<h3>moo</h3>
			<WideSectionHeader />
			<PortfolioList data={posts} />
			<Footer />
		</div>
	);
}

export default Home;
