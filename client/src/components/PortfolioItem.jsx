import React, { Component } from "react";
import { Modal, ModalManager, Effect } from "react-dynamic-modal";
import { GoX } from "react-icons/go";
import PortfolioItemDetails from "./PortfolioItemDetails";
import "../app/index.css";

const defaultStyles = {
	overlay: {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 99999999,
		overflow: "hidden",
		perspective: 1300,
		backgroundColor: "rgba(0, 0, 0, 0.3)",
	},

	content: {
		position: "relative",
		margin: "3% auto",
		width: "60%",
		border: "1px solid rgba(0, 0, 0, .2)",
		background: "#fff",
		overflow: "auto",
		borderRadius: "4px",
		outline: "none",
		boxShadow: "0 5px 10px rgba(0, 0, 0, .3)",
		maxHeight: "calc(100vh - 2rem)",
	},
};

class MyModal extends Component {
	render() {
		const { data, onRequestClose } = this.props;

		return (
			<Modal
				onRequestClose={onRequestClose}
				effect={Effect.ScaleUp}
				style={defaultStyles}
			>
				<div className="modal-header">
					<button
						type="button"
						className="close"
						data-dismiss="modal"
						aria-label="Close"
						onClick={ModalManager.close}
					>
						<span aria-hidden="true">
							<GoX />
						</span>
					</button>
				</div>
				<div className="modal-body">
					<PortfolioItemDetails
						modalName={data.modalName}
						imgUrl={data.imgUrl}
						lat={data.lat}
						lng={data.lng}
						cityName={data.cityName}
						geoloction={false}
					/>
				</div>
				<div className="modal-footer">
					<button
						type="button"
						className="btn btn-primary"
						onClick={ModalManager.close}
					>
						<i className="fas fa-times fa-fw"></i>
						סגור
					</button>
				</div>
			</Modal>
		);
	}
}

class PortfolioItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false,
		};
	}

	openModal() {
		const payload = {
			modalName: this.props.modalName,
			imgUrl: this.props.imgUrl,
			lat: this.props.lat,
			lng: this.props.lng,
			cityName: this.props.name,
		};

		ModalManager.open(
			<MyModal data={payload} onRequestClose={() => true} />
		);
	}

	render() {
		return (
			<div
				className="col-md-6 col-lg-4"
				onClick={this.openModal.bind(this)}
			>
				<div
					className="portfolio-item mx-auto"
					data-toggle="modal"
					data-target="#portfolioModal1"
				>
					<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
						<div className="portfolio-item-caption-content text-center text-white">
							<span>{this.props.name}</span>
						</div>
					</div>
					<img src={this.props.imgUrl} className="img-fluid" alt="" />
				</div>
			</div>
		);
	}
}

export default PortfolioItem;
