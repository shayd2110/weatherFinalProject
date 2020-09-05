import React, { Component } from "react";
import PortfolioItemDetails from "./PortfolioItemDetails";
import Popup from "reactjs-popup";
import "../app/index.css";

class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isImageClicked: false,
    };
    this.toggle = this.toggle.bind(this);
    this.imageClick = this.imageClick.bind(this);
  }

  imageClick() {
    this.setState({ isImageClicked: true });
  }

  toggle() {
    this.setState({ isImageClicked: false });
  }

  render() {
    console.log("first", this.state.isImageClicked);
    return (
      <div onClick={this.imageClick}>
        <div class="col-md-6 col-lg-4">
          <div
            class="portfolio-item mx-auto"
            data-toggle="modal"
            data-target="#portfolioModal1"
          >
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white">
                <span>{this.props.name}</span>
              </div>
            </div>
            <img
              src={this.props.imgUrl}
              className="img-fluid"
              alt=""
              onClick={this.imageClick()}
            />
          </div>
        </div>

        <Popup open={false}>
          <div>
            <PortfolioItemDetails
              modalName={this.props.modalName}
              imgUrl={this.props.imgUrl}
              lat={this.props.lat}
              lng={this.props.lng}
              cityName={this.props.name}
            />
            <button onClick={this.toggle}>close</button>
          </div>
        </Popup>
      </div>
    );
  }
}

export default PortfolioItem;
