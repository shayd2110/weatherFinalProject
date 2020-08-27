import React from "react";
import PortfolioItemDetailModal from "./PortfolioItemDetailModal.jsx";
<<<<<<< HEAD

class PortfolioListItem extends React.Component {
  render() {
    return (
      <div>
        <div className="col-sm-4 portfolio-item">
          <a
            href={"#" + this.props.modalName}
            className="portfolio-link"
            data-toggle="modal"
          >
            <div className="caption">
              <div className="caption-content">
                <span>{this.props.name}</span>
              </div>
            </div>

            <img
              style={{ borderRadius: "12px" }}
              src={this.props.imgUrl}
              className="img-responsive"
              alt=""
            />
          </a>
        </div>
        <PortfolioItemDetailModal
          modalName={this.props.modalName}
          lat={this.props.lat}
          lng={this.props.lng}
        />
=======
import "./freelancer.css";
import "./freelancer.min.css";
class PortfolioListItem extends React.Component {
  render() {
    return (
      <div class="col-md-6 col-lg-4" id="tel-aviv-btn">
        <div
          class="portfolio-item mx-auto"
          data-toggle="modal"
          data-target="#portfolioModal1"
        >
          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div class="portfolio-item-caption-content text-center text-white">
              <span>תל-אביב</span>
            </div>
          </div>
          <img class="img-fluid" src={this.props.imgUrl} alt="" />
        </div>
>>>>>>> 9bfe51e9ccae6bb98f21e4e2d7a0917cf68cd420
      </div>
    );
  }
}

export default PortfolioListItem;
