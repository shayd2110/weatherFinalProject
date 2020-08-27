/* eslint-disable react/prop-types */
import React from "react";
import PortfolioItemDetailModal from "./PortfolioItemDetailModal.jsx";

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
			</div>
		);
	}
}

export default PortfolioListItem;
