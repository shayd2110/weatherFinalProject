import React from "react";
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
        </div>
      </header>
    );
  }
}

export default WideSectionHeader;
