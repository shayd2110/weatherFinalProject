import React from "react";
import $ from "jquery";
import moment from "moment";
import { FaStar } from "react-icons/fa";
import { WiRaindrop } from "react-icons/wi";

const Skycons = require("skycons")(window);
const arrow = require("../img/arrow.png");

var weekday = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"]; //to find day of the week
var months = [
	"ינואר",
	"פברואר",
	"מרץ",
	"אפריל",
	"מאי",
	"יוני",
	"יולי",
	"אוגוסט",
	"ספטמבר",
	"אוקטובר",
	"נובומבר",
	"דצמבר",
]; //to find current month.

class PortfolioParseDetails extends React.Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
		this.state = {
			data: props.data,
			cityName: props.cityName,
		};
	}

	render() {
		return (
			<div className="modal-content">
				<div className="modal-body text-center">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8">
								{/* !-- Portfolio Modal - Title -- */}
								<h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
									{this.state.cityName}
								</h2>
								{/* !-- Icon Divider -- */}
								<div className="divider-custom">
									<div className="divider-custom-line"></div>
									<div className="divider-custom-icon">
										<FaStar />
									</div>
									<div className="divider-custom-line"></div>
								</div>
								<div className="widget main-widget">
									<div className="left-panel panel">
										<div className="row">
											<div className="col-lg-2 text-center"></div>
											<div className="col-lg-2 text-center"></div>
											<div className="col-lg-2 text-center">
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
												<div
													className="row"
													id="row_wind_arrow"
												>
													<div id="col-arrow">
														<img
															id="arrow"
															src={arrow}
															alt=""
														/>
													</div>
													<div id="col-wind">
														<h id="wind"></h>
													</div>
												</div>
												<div className="date">
													<h id="clander-date"></h>
													<br />
													<h id="clock-time"> </h>
												</div>
											</div>
											<div className="col-lg-2 text-center">
												<div className="right-panel panel">
													<canvas
														id="weather-icon"
														width="160"
														height="160"
														ref={this.ref}
													></canvas>
													<div className="summary">
														<h id="weather-description"></h>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* -- Icon Divider -- */}
								<div className="divider-custom">
									<div className="divider-custom-line"></div>
									<div className="divider-custom-icon">
										<FaStar />
									</div>
									<div className="divider-custom-line"></div>
								</div>
								{/* !-- forcast -- */}
								<div className="widget main-widget">
									<div className="row">
										<div className="col-lg-1 text-center">
											<p id="day0"></p>
											<p id="date0"></p>

											<canvas
												id="weather-icon-day0"
												width="45"
												height="45"
											></canvas>
											<p
												id="description0"
												style={{ height: "15%" }}
											></p>

											<p id="day0-high-low"></p>
											<div className="row" id="raindrop">
												<div id="raindrop_icon">
													<WiRaindrop />
												</div>
												<div id="rain_precip">
													<p id="day0-precip"></p>
												</div>
											</div>
										</div>
										<div className="col-lg-1 text-center">
											<p id="day1"></p>
											<p id="date1"></p>
											<canvas
												id="weather-icon-day1"
												width="45"
												height="45"
											></canvas>
											<p
												id="description1"
												style={{ height: "15%" }}
											></p>
											<p id="day1-high-low"></p>
											<div className="row" id="raindrop">
												<div id="raindrop_icon">
													<WiRaindrop />
												</div>
												<div id="rain_precip">
													<p id="day1-precip"></p>
												</div>
											</div>
										</div>
										<div className="col-lg-1 text-center">
											<p id="day2"></p>
											<p id="date2"></p>
											<canvas
												id="weather-icon-day2"
												width="45"
												height="45"
											></canvas>
											<p
												id="description2"
												style={{ height: "15%" }}
											></p>
											<p id="day2-high-low"></p>
											<div className="row" id="raindrop">
												<div id="raindrop_icon">
													<WiRaindrop />
												</div>
												<div id="rain_precip">
													<p id="day2-precip"></p>
												</div>
											</div>
										</div>
										<div className="col-lg-1 text-center">
											<p id="day3"></p>
											<p id="date3"></p>
											<canvas
												id="weather-icon-day3"
												width="45"
												height="45"
											></canvas>
											<p
												id="description3"
												style={{ height: "15%" }}
											></p>
											<p id="day3-high-low"></p>
											<div className="row" id="raindrop">
												<div id="raindrop_icon">
													<WiRaindrop />
												</div>
												<div id="rain_precip">
													<p id="day3-precip"></p>
												</div>
											</div>
										</div>
										<div className="col-lg-1 text-center">
											<p id="day4"></p>
											<p id="date4"></p>
											<canvas
												id="weather-icon-day4"
												width="45"
												height="45"
											></canvas>
											<p
												id="description4"
												style={{ height: "15%" }}
											></p>
											<p id="day4-high-low"></p>
											<div className="row" id="raindrop">
												<div id="raindrop_icon">
													<WiRaindrop />
												</div>
												<div id="rain_precip">
													<p id="day4-precip"></p>
												</div>
											</div>
										</div>
										<div className="col-lg-1 text-center">
											<p id="day5"></p>
											<p id="date5"></p>
											<canvas
												id="weather-icon-day5"
												width="45"
												height="45"
											></canvas>
											<p
												id="description5"
												style={{ height: "15%" }}
											></p>
											<p id="day5-high-low"></p>
											<div className="row" id="raindrop">
												<div id="raindrop_icon">
													<WiRaindrop />
												</div>
												<div id="rain_precip">
													<p id="day5-precip"></p>
												</div>
											</div>
										</div>
										<div className="col-lg-1 text-center">
											<p id="day6"></p>
											<p id="date6"></p>
											<canvas
												id="weather-icon-day6"
												width="45"
												height="45"
											></canvas>
											<p
												id="description6"
												style={{ height: " 15%" }}
											></p>
											<p id="day6-high-low"></p>
											<div className="row" id="raindrop">
												<div id="raindrop_icon">
													<WiRaindrop />
												</div>
												<div id="rain_precip">
													<p id="day6-precip"></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		var temp = Math.round(this.state.data[3][1].temperature);
		$("#current-temp").text(`${temp} °C`);
		var temp_feels_like = Math.round(
			this.state.data[3][1].apparentTemperature
		);
		$("#feels-like").text(`${temp_feels_like}°C :מרגיש`);
		$("#humidity").text(
			`${Math.round(this.state.data[3][1].humidity * 100)}% :לחות `
		);
		$("#uv-index").text(`${this.state.data[3][1].uvIndex} :UV מדד קרינת`);
		$("#wind").text(
			`רוח: ${Math.ceil(this.state.data[3][1].windSpeed)} קמש`
		);
		$("#arrow").attr("alt", this.state.data[3][1].windBearing + " degrees");
		$("#arrow").attr(
			"style",
			`transform: rotate(${this.state.data[3][1].windBearing}deg);`
		);
		var description = this.state.data[3][1].summary;
		$("#weather-description").text(`${description}`);
		var currently_time = new Date();
		var str_time =
			currently_time.getHours() + ":" + currently_time.getMinutes();

		var dayOfWeek = weekday[currently_time.getDay()];
		var dayOfMonth =
			currently_time.getDate() < 10
				? "0" + currently_time.getDate()
				: currently_time.getDate();
		var curMonth = months[currently_time.getMonth()];
		var str_date = "," + dayOfWeek + " " + dayOfMonth + " " + curMonth;
		$("#clander-date").text(`${str_date}`);
		$("#clock-time").text(`${str_time}`);

		var icon = this.state.data[3][1].icon;
		const skycons = new Skycons({ color: "#293251" });
		skycons.add(this.ref.current, icon);
		skycons.play();

		//now is the forcast

		for (var day_i = 0; day_i < 7; day_i++) {
			var date = new Date(this.state.data[5][1].data[day_i].time * 1000);
			if (day_i === 0) $("#day" + day_i).text("היום");
			else $("#day" + day_i).text(`${weekday[date.getDay()]}`);
			var dateMomentObject = moment(date).format("DD/MM/YYYY");
			$("#date" + day_i).text(`${dateMomentObject}`);

			skycons.set(
				"weather-icon-day" + day_i,
				this.state.data[5][1].data[day_i].icon
			);
			$("#description" + day_i).text(
				`${this.state.data[5][1].data[day_i].summary.replace(".", " ")}`
			);

			$("#day" + day_i + "-high-low").text(
				`${Math.round(
					this.state.data[5][1].data[day_i].temperatureMax
				)} / ${Math.round(
					this.state.data[5][1].data[day_i].temperatureLow
				)} °C`
			);
			$("#day" + day_i + "-precip").text(
				`${
					(Math.round(
						this.state.data[5][1].data[day_i].precipProbability * 10
					) /
						10) *
					100
				}%`
			);
		}
	}
}

export default PortfolioParseDetails;
