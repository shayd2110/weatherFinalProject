/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Element } from "react-scroll";
import { FaStar } from "react-icons/fa";
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
				{/* <Element id="example-destination" name="example-destination"> */}
				<section className="page-section portfolio" id="portfolio">
					<div className="container">
						{/* -- Portfolio Section Heading -- */}
						<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
							ערים נבחרות
						</h2>

						{/* -- Icon Divider -- */}
						<div className="divider-custom">
							<div className="divider-custom-line"></div>
							<div className="divider-custom-icon">
								<FaStar />
							</div>
							<div className="divider-custom-line"></div>
						</div>

						{/* -- Portfolio Grid Items -- */}
						<div className="row">
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
				{/* </Element> */}
			</React.Fragment>
		);
	}
}

export default PortfolioGrid;
