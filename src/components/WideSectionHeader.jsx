import React from "react";
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
        </div>
      </header>
    );
  }
}

export default WideSectionHeader;
