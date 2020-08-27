import React from "react";
<<<<<<< HEAD
import "./projectcss.css";
class WideSectionHeader extends React.Component {
  render() {
    return (
      <header>
        <div className="bg-primary">
          <div className="row">
            <div className="col-lg-12">
              <img
                style={{ width: "20rem" }}
                className="img-responsive"
                src="img/clouds-1293230.png"
                alt=""
              />
              <div className="intro-text">
                <span className="name">
                  ברוכים הבאים למזג-אוויר <br /> ישראל
                </span>
                <hr className="star-light" />
                <span className="skills">
                  בלחיצה תקבלו תחזיות מזג-אוויר בישראל
                </span>
              </div>
            </div>
          </div>
=======
import "./freelancer.css";
import "./freelancer.min.css";

class WideSectionHeader extends React.Component {
  render() {
    return (
      <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
          <img
            class="masthead-avatar mb-5"
            src="img/clouds-1293230.png"
            alt=""
          ></img>

          <h1 class="masthead-heading text-uppercase mb-0">
            ברוכים הבאים למזג-אוויר
            <br /> ישראל
          </h1>

          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div>

          <p class="masthead-subheading font-weight-light mb-0">
            בלחיצה תקבלו תחזיות מזג-אוויר בישראל
          </p>
>>>>>>> 9bfe51e9ccae6bb98f21e4e2d7a0917cf68cd420
        </div>
      </header>
    );
  }
}

export default WideSectionHeader;
