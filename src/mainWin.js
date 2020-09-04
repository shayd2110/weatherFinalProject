/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import NavBar from "./components/NavBar.jsx";
import WideSectionHeader from "./components/WideSectionHeader";
import PortfolioList from "./components/PortfolioList";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

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
const MainWin = () => {
	return (
		<div>
			<NavBar />
			<WideSectionHeader />
			<PortfolioList data={posts} />
			<Footer />
		</div>
	);
};
export default MainWin;

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
*/
