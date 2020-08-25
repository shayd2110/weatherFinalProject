import React from "react";
import PortfolioItemDetailModal from "./PortfolioItemDetailModal.jsx";
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
      </div>
    );
  }
}

export default PortfolioListItem;
