import React, { Component } from "react";
import { Element } from "react-scroll";
import { PortfolioItem } from "./";

class PortfolioGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCities: props.selectedCities,
    };
  }
  render() {
    return (
      <React.Fragment>
        <Element id="example-destination" name="example-destination">
          <section class="page-section portfolio" id="portfolio">
            <div class="container">
              {/* -- Portfolio Section Heading -- */}
              <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
                ערים נבחרות
              </h2>

              {/* -- Icon Divider -- */}
              <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon">
                  <i class="fas fa-star"></i>
                </div>
                <div class="divider-custom-line"></div>
              </div>

              {/* -- Portfolio Grid Items -- */}
              <div class="row">
                {this.state.selectedCities.map((list) => {
                  return (
                    <PortfolioItem
                      imgUrl={list.url}
                      key={list.id}
                      modalName={"projmodal" + list.id}
                      name={list.name}
                      lat={list.lat}
                      lng={list.lng}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </Element>
      </React.Fragment>
    );
  }
}

export default PortfolioGrid;
