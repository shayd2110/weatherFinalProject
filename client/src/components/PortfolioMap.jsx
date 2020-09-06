import React, { Component } from "react";

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
				<section className="page-section portfolio" id="selected">
					<div className="container">
						{/* !-- Portfolio Grid Items -- */}
						<div className="row">
							<div className="modal-body text-center">
								<div className="container">
									<div className="row justify-content-center">
										<div className="col-lg-8">
											<div className="app-title">
												<p>
													לחץ על עיר/ישוב במפה להצגת
													מזג-אוויר עכשוי
												</p>
											</div>
											<div id="map"></div>
										</div>
										<div className="col-lg-8">
											{/* !-- Portfolio Modal - Title -- */}
											<br />
											<h2
												className="portfolio-modal-title text-secondary text-uppercase"
												id="map-address"
											></h2>
											<h2
												className="portfolio-modal-title text-secondary text-uppercase"
												id="map-city"
											></h2>
											<h2
												className="portfolio-modal-title text-secondary text-uppercase"
												id="map-state"
											></h2>
											{/* !-- Icon Divider -- */}
											<div className="divider-custom">
												<div className="divider-custom-line"></div>
												<div className="divider-custom-icon">
													<i className="fas fa-star"></i>
												</div>
												<div className="divider-custom-line"></div>
											</div>

											{/* !-- Portfolio Modal - Text -- */}

											<div className="widget main-widget">
												<div className="left-panel panel">
													<div className="row">
														<div className="col-lg-2 text-center"></div>
														<div className="col-lg-2 text-center"></div>
														<div className="col-lg-2 text-center">
															<div className="temp">
																<h1 id="current-temp-0">
																	<span></span>
																</h1>
															</div>

															<h id="feels-like-0"></h>
															<br />
															<h id="humidity-0"></h>
															<br />
															<h id="uv-index-0"></h>
															<br />
															<div
																id="row_wind_arrow"
																className="row"
															>
																<div id="col-arrow">
																	<img
																		id="arrow-0"
																		src=""
																		alt=""
																	/>
																</div>
																<div id="col-wind">
																	<h id="wind-0"></h>
																</div>
															</div>
															<div className="date">
																<h id="clander-date-0"></h>
																<h id="clock-time-0">
																	{" "}
																</h>
															</div>
														</div>
														<div className="col-lg-2 text-center">
															<div className="right-panel panel">
																<canvas
																	id="weather-icon-0"
																	width="160"
																	height="160"
																></canvas>
																<div className="summary">
																	<h id="weather-description-0"></h>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											{/* !-- Icon Divider -- */}
											<div className="divider-custom">
												<div className="divider-custom-line"></div>
												<div className="divider-custom-icon">
													<i className="fas fa-star"></i>
												</div>
												<div className="divider-custom-line"></div>
											</div>

											{/* !-- forcast -- */}
											<div className="widget main-widget">
												<div className="row">
													<div className="col-lg-1 text-center">
														<p id="day00"></p>
														<p id="date00"></p>
														<canvas
															id="weather-icon-day00"
															width="45"
															height="45"
														></canvas>
														<p
															id="description00"
															style="height: 15%"
														></p>
														<p id="day00-high-low"></p>
														<div
															className="row"
															id="raindrop"
														>
															<div id="raindrop_icon">
																<span
																	className="iconify"
																	id="iconify00"
																	data-icon=""
																	data-inline="false"
																>
																	{" "}
																</span>
															</div>
															<div id="rain_precip">
																<p id="day00-precip"></p>
															</div>
														</div>
													</div>

													<div className="col-lg-1 text-center">
														<p id="day01"></p>
														<p id="date01"></p>
														<canvas
															id="weather-icon-day01"
															width="45"
															height="45"
														></canvas>
														<p
															id="description01"
															style="height: 15%"
														></p>
														<p id="day01-high-low"></p>
														<div
															className="row"
															id="raindrop"
														>
															<div id="raindrop_icon">
																<span
																	className="iconify"
																	id="iconify01"
																	data-icon=""
																	data-inline="false"
																>
																	{" "}
																</span>
															</div>
															<div id="rain_precip">
																<p id="day01-precip"></p>
															</div>
														</div>
													</div>
													<div className="col-lg-1 text-center">
														<p id="day02"></p>
														<p id="date02"></p>
														<canvas
															id="weather-icon-day02"
															width="45"
															height="45"
														></canvas>
														<p
															id="description02"
															style="height: 15%"
														></p>
														<p id="day02-high-low"></p>
														<div
															className="row"
															id="raindrop"
														>
															<div id="raindrop_icon">
																<span
																	className="iconify"
																	id="iconify02"
																	data-icon=""
																	data-inline="false"
																>
																	{" "}
																</span>
															</div>
															<div id="rain_precip">
																<p id="day02-precip"></p>
															</div>
														</div>
													</div>
													<div className="col-lg-1 text-center">
														<p id="day03"></p>
														<p id="date03"></p>
														<canvas
															id="weather-icon-day03"
															width="45"
															height="45"
														></canvas>
														<p
															id="description03"
															style="height: 15%"
														></p>
														<p id="day03-high-low"></p>
														<div
															className="row"
															id="raindrop"
														>
															<div id="raindrop_icon">
																<span
																	className="iconify"
																	id="iconify03"
																	data-icon=""
																	data-inline="false"
																>
																	{" "}
																</span>
															</div>
															<div id="rain_precip">
																<p id="day03-precip"></p>
															</div>
														</div>
													</div>
													<div className="col-lg-1 text-center">
														<p id="day04"></p>
														<p id="date04"></p>
														<canvas
															id="weather-icon-day04"
															width="45"
															height="45"
														></canvas>
														<p
															id="description04"
															style="height: 15%"
														></p>
														<p id="day04-high-low"></p>
														<div
															className="row"
															id="raindrop"
														>
															<div id="raindrop_icon">
																<span
																	className="iconify"
																	id="iconify04"
																	data-icon=""
																	data-inline="false"
																>
																	{" "}
																</span>
															</div>
															<div id="rain_precip">
																<p id="day04-precip"></p>
															</div>
														</div>
													</div>
													<div className="col-lg-1 text-center">
														<p id="day05"></p>
														<p id="date05"></p>
														<canvas
															id="weather-icon-day05"
															width="45"
															height="45"
														></canvas>
														<p
															id="description05"
															style="height: 15%"
														></p>
														<p id="day05-high-low"></p>
														<div
															className="row"
															id="raindrop"
														>
															<div id="raindrop_icon">
																<span
																	className="iconify"
																	id="iconify05"
																	data-icon=""
																	data-inline="false"
																>
																	{" "}
																</span>
															</div>
															<div id="rain_precip">
																<p id="day05-precip"></p>
															</div>
														</div>
													</div>
													<div className="col-lg-1 text-center">
														<p id="day06"></p>
														<p id="date06"></p>
														<canvas
															id="weather-icon-day06"
															width="45"
															height="45"
														></canvas>
														<p
															id="description06"
															style="height: 15%"
														></p>
														<p id="day06-high-low"></p>
														<div
															className="row"
															id="raindrop"
														>
															<div id="raindrop_icon">
																<span
																	className="iconify"
																	id="iconify06"
																	data-icon=""
																	data-inline="false"
																>
																	{" "}
																</span>
															</div>
															<div id="rain_precip">
																<p id="day06-precip"></p>
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
						{/* !-- /.row -- */}
					</div>
				</section>
			</>
		);
	}
}

export default Portfolio;
