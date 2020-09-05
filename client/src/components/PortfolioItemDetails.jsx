import React, { Component } from "react";

class PortfolioItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      lat: props.lat,
      lng: props.lng,
      cityName: props.cityName,
    };
  }

  async componentDidMount() {
    let _darkskyApiKey = "014dd470e25bffea4a246375af37ba17";
    let _darkskyUnits = "ca"; // or "si" or "us"
    let _darkskyLang = "he"; // hebrew
    const url = `https://cors-anywhere.herokuapp.com/https://api.forecast.io/forecast/${_darkskyApiKey}/${this.props.lat},${this.props.lng}?&lang=${_darkskyLang}&units=${_darkskyUnits}`;
    const response = await fetch(url);
    const tempData = await response.json();
    let tmpArray = [];

    Object.entries(tempData).map((postData) => {
      tmpArray.push(postData);
    });
    this.setState({ data: tmpArray, loading: false });
  }

  render() {
    return (
      //#region
      //    <div
      //    class="portfolio-modal modal fade"
      //    id="portfolioModal1"
      //    tabindex="-1"
      //    role="dialog"
      //    aria-labelledby="portfolioModal1Label"
      //    aria-hidden="true"
      //  >
      //    <div class="modal-dialog modal-xl" role="document">
      //      <div class="modal-content">
      //        <button
      //          type="button"
      //          class="close"
      //          data-dismiss="modal"
      //          aria-label="Close"
      //        >
      //          <span aria-hidden="true">
      //            <i class="fas fa-times"></i>
      //          </span>
      //        </button>
      //        <div class="modal-body text-center">
      //          <div class="container">
      //            <div class="row justify-content-center">
      //              <div class="col-lg-8">
      //                {/* !-- Portfolio Modal - Title -- */}
      //                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
      //                  תל-אביב
      //                </h2>
      //                {/* !-- Icon Divider -- */}
      //                <div class="divider-custom">
      //                  <div class="divider-custom-line"></div>
      //                  <div class="divider-custom-icon">
      //                    <i class="fas fa-star"></i>
      //                  </div>
      //                  <div class="divider-custom-line"></div>
      //                </div>
      //                <div class="widget main-widget">
      //                  <div class="left-panel panel">
      //                    <div class="row">
      //                      <div class="col-lg-2 text-center"></div>
      //                      <div class="col-lg-2 text-center"></div>
      //                      <div class="col-lg-2 text-center">
      //                        <div class="temp">
      //                          <h1 id="current-temp-0">
      //                            <span></span>
      //                          </h1>
      //                        </div>
      //                        <h id="feels-like-0"></h>
      //                        <br />
      //                        <h id="humidity-0"></h>
      //                        <br />
      //                        <h id="uv-index-0"></h>
      //                        <br />
      //                        <div class="row" id="row_wind_arrow">
      //                          <div id="col-arrow">
      //                            <img id="arrow-0" src="" alt="" />
      //                          </div>
      //                          <div id="col-wind">
      //                            <h id="wind-0"></h>
      //                          </div>
      //                        </div>
      //                        <div class="date">
      //                          <h id="clander-date-0"></h>
      //                          <h id="clock-time-0"> </h>
      //                        </div>
      //                      </div>
      //                      <div class="col-lg-2 text-center">
      //                        <div class="right-panel panel">
      //                          <canvas
      //                            id="weather-icon-0"
      //                            width="160"
      //                            height="160"
      //                          ></canvas>
      //                          <div class="summary">
      //                            <h id="weather-description-0"></h>
      //                          </div>
      //                        </div>
      //                      </div>
      //                    </div>
      //                  </div>
      //                </div>
      //                {/* !-- Icon Divider -- */}
      //                <div class="divider-custom">
      //                  <div class="divider-custom-line"></div>
      //                  <div class="divider-custom-icon">
      //                    <i class="fas fa-star"></i>
      //                  </div>
      //                  <div class="divider-custom-line"></div>
      //                </div>
      //                {/* !-- forcast -- */}
      //                <div class="widget main-widget">
      //                  <div class="row">
      //                    <div class="col-lg-1 text-center">
      //                      <p id="day00"></p>
      //                      <p id="date00"></p>
      //                      <canvas
      //                        id="weather-icon-day00"
      //                        width="45"
      //                        height="45"
      //                      ></canvas>
      //                      <p id="description00" style="height: 15%"></p>
      //                      <p id="day00-high-low"></p>
      //                      <div class="row" id="raindrop">
      //                        <div id="raindrop_icon">
      //                          <span
      //                            class="iconify"
      //                            id="iconify00"
      //                            data-icon=""
      //                            data-inline="false"
      //                          >
      //                            {" "}
      //                          </span>
      //                        </div>
      //                        <div id="rain_precip">
      //                          <p id="day00-precip"></p>
      //                        </div>
      //                      </div>
      //                    </div>
      //                    <div class="col-lg-1 text-center">
      //                      <p id="day01"></p>
      //                      <p id="date01"></p>
      //                      <canvas
      //                        id="weather-icon-day01"
      //                        width="45"
      //                        height="45"
      //                      ></canvas>
      //                      <p id="description01" style="height: 15%"></p>
      //                      <p id="day01-high-low"></p>
      //                      <div class="row" id="raindrop">
      //                        <div id="raindrop_icon">
      //                          <span
      //                            class="iconify"
      //                            id="iconify01"
      //                            data-icon=""
      //                            data-inline="false"
      //                          >
      //                            {" "}
      //                          </span>
      //                        </div>
      //                        <div id="rain_precip">
      //                          <p id="day01-precip"></p>
      //                        </div>
      //                      </div>
      //                    </div>
      //                    <div class="col-lg-1 text-center">
      //                      <p id="day02"></p>
      //                      <p id="date02"></p>
      //                      <canvas
      //                        id="weather-icon-day02"
      //                        width="45"
      //                        height="45"
      //                      ></canvas>
      //                      <p id="description02" style="height: 15%"></p>
      //                      <p id="day02-high-low"></p>
      //                      <div class="row" id="raindrop">
      //                        <div id="raindrop_icon">
      //                          <span
      //                            class="iconify"
      //                            id="iconify02"
      //                            data-icon=""
      //                            data-inline="false"
      //                          >
      //                            {" "}
      //                          </span>
      //                        </div>
      //                        <div id="rain_precip">
      //                          <p id="day02-precip"></p>
      //                        </div>
      //                      </div>
      //                    </div>
      //                    <div class="col-lg-1 text-center">
      //                      <p id="day03"></p>
      //                      <p id="date03"></p>
      //                      <canvas
      //                        id="weather-icon-day03"
      //                        width="45"
      //                        height="45"
      //                      ></canvas>
      //                      <p id="description03" style="height: 15%"></p>
      //                      <p id="day03-high-low"></p>
      //                      <div class="row" id="raindrop">
      //                        <div id="raindrop_icon">
      //                          <span
      //                            class="iconify"
      //                            id="iconify03"
      //                            data-icon=""
      //                            data-inline="false"
      //                          >
      //                            {" "}
      //                          </span>
      //                        </div>
      //                        <div id="rain_precip">
      //                          <p id="day03-precip"></p>
      //                        </div>
      //                      </div>
      //                    </div>
      //                    <div class="col-lg-1 text-center">
      //                      <p id="day04"></p>
      //                      <p id="date04"></p>
      //                      <canvas
      //                        id="weather-icon-day04"
      //                        width="45"
      //                        height="45"
      //                      ></canvas>
      //                      <p id="description04" style="height: 15%"></p>
      //                      <p id="day04-high-low"></p>
      //                      <div class="row" id="raindrop">
      //                        <div id="raindrop_icon">
      //                          <span
      //                            class="iconify"
      //                            id="iconify04"
      //                            data-icon=""
      //                            data-inline="false"
      //                          >
      //                            {" "}
      //                          </span>
      //                        </div>
      //                        <div id="rain_precip">
      //                          <p id="day04-precip"></p>
      //                        </div>
      //                      </div>
      //                    </div>
      //                    <div class="col-lg-1 text-center">
      //                      <p id="day05"></p>
      //                      <p id="date05"></p>
      //                      <canvas
      //                        id="weather-icon-day05"
      //                        width="45"
      //                        height="45"
      //                      ></canvas>
      //                      <p id="description05" style="height: 15%"></p>
      //                      <p id="day05-high-low"></p>
      //                      <div class="row" id="raindrop">
      //                        <div id="raindrop_icon">
      //                          <span
      //                            class="iconify"
      //                            id="iconify05"
      //                            data-icon=""
      //                            data-inline="false"
      //                          >
      //                            {" "}
      //                          </span>
      //                        </div>
      //                        <div id="rain_precip">
      //                          <p id="day05-precip"></p>
      //                        </div>
      //                      </div>
      //                    </div>
      //                    <div class="col-lg-1 text-center">
      //                      <p id="day06"></p>
      //                      <p id="date06"></p>
      //                      <canvas
      //                        id="weather-icon-day06"
      //                        width="45"
      //                        height="45"
      //                      ></canvas>
      //                      <p id="description06" style="height: 15%"></p>
      //                      <p id="day06-high-low"></p>
      //                      <div class="row" id="raindrop">
      //                        <div id="raindrop_icon">
      //                          <span
      //                            class="iconify"
      //                            id="iconify06"
      //                            data-icon=""
      //                            data-inline="false"
      //                          >
      //                            {" "}
      //                          </span>
      //                        </div>
      //                        <div id="rain_precip">
      //                          <p id="day06-precip"></p>
      //                        </div>
      //                      </div>
      //                    </div>
      //                  </div>
      //                </div>
      //                <button
      //                  class="btn btn-primary"
      //                  href="#"
      //                  data-dismiss="modal"
      //                >
      //                  <i class="fas fa-times fa-fw"></i>
      //                  סגור
      //                </button>
      //              </div>
      //            </div>
      //          </div>
      //        </div>
      //      </div>
      //    </div>
      //  </div>
      //#endregion
      <>
        <h1>hello</h1>
      </>
    );
  }
}

export default PortfolioItemDetails;
