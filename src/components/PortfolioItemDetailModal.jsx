/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";
const style = {
	zIndex: 2000,
	margin: "100px",
	fontFamily: "Arial",
};

class PortfolioItemDetailModal extends React.Component {
	_darkskyApiKey = "014dd470e25bffea4a246375af37ba17";
	_darkskyUnits = "ca"; // or "si" or "us"
	_darkskyLang = "he"; // hebrew
	url = `https://cors-anywhere.herokuapp.com/https://api.forecast.io/forecast/${this._darkskyApiKey}/${this.props.lat},${this.props.lng}?&lang=${this._darkskyLang}&units=${this._darkskyUnits}`;

	async getTodos() {
		// Simple one
		let todos = await axios.get(
			"https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10"
		);
		alert(todos.data);
		console.log(todos.data);
	}

	render() {
		console.log(this.props.modalName);
		return (
			<div
				style={style}
				className="portfolio-modal modal fade"
				id={this.props.modalName}
				tabIndex="-1"
				role="dialog"
				aria-hidden="true"
			>
				<div className="modal-content">
					<div className="close-modal" data-dismiss="modal">
						<div className="lr">
							<div className="rl"></div>
						</div>
					</div>
					<div className="container">
						<div className="temp">
							<h1 id="current-temp">
								<span></span>
							</h1>
						</div>
						<h id="feels-like"></h>
						<br />
						<h id="humidity"></h>
						<br />
						<h id="uv-index"></h>
						<br />
						<div className="row">
							<div id="col-arrow">
								<img id="arrow" src="" alt="" />
							</div>
							<div id="col-wind">
								<h id="wind"></h>
							</div>
						</div>
						<div className="date">
							<h id="clander-date"></h>
							<h id="clock-time"> </h>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PortfolioItemDetailModal;
