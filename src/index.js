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

class App extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<WideSectionHeader />
				<PortfolioList data={posts} />
				<Footer />
			</div>
		);
	}
}
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
*/
ReactDOM.render(<App />, document.getElementById("app"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
