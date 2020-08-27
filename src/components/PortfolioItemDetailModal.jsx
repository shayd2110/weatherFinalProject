<<<<<<< HEAD
import React from "react";
import axios from "axios";
const style = {
  zIndex: 2000,
  margin: "100px",
  fontFamily: "Arial"
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
            <div class="temp">
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
            <div class="date">
              <h id="clander-date"></h>
              <h id="clock-time"> </h>
            </div>
          </div>
        </div>
      </div>
=======
import React from 'react';

const style = {
  zIndex: 2000
};

class PortfolioItemDetailModal extends React.Component {
  render(){
    console.log(this.props.modalName)
    return (
      <div style={style} className="portfolio-modal modal fade" id={this.props.modalName} tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                  <div className="lr">
                      <div className="rl">
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 col-lg-offset-2">
                          <div className="modal-body">
                              <h2>Project Title</h2>
                              <hr className="star-primary" />
                              <img src={this.props.imgUrl} className="img-responsive img-centered" alt="" />
                              <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                              <ul className="list-inline item-details">
                                  <li>Client:
                                      <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
                                      </strong>
                                  </li>
                                  <li>Date:
                                      <strong><a href="http://startbootstrap.com">April 2014</a>
                                      </strong>
                                  </li>
                                  <li>Service:
                                      <strong><a href="http://startbootstrap.com">Web Development</a>
                                      </strong>
                                  </li>
                              </ul>
                              <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>


>>>>>>> 9bfe51e9ccae6bb98f21e4e2d7a0917cf68cd420
    );
  }
}

<<<<<<< HEAD
export default PortfolioItemDetailModal;
=======
export default PortfolioItemDetailModal
>>>>>>> 9bfe51e9ccae6bb98f21e4e2d7a0917cf68cd420
