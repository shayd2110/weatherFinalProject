/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Modal, ModalManager, Effect } from "react-dynamic-modal";
import { GoX } from "react-icons/go";
import PortfolioItemDetails from "./PortfolioItemDetails";
// import Popup from "reactjs-popup";
// import Modal from "react-modal";
import "../app/index.css";

class MyModal extends Component {
	render() {
		const { data, onRequestClose } = this.props;

		return (
			<Modal
				onRequestClose={onRequestClose}
				effect={Effect.ScaleUp}
				styles={Modal.Styles}
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
					/>
				</div>
				<div className="modal-footer">
					<button
						type="button"
						className="btn btn-primary"
						onClick={ModalManager.close}
					>
						<i className="fas fa-times fa-fw"></i>
						����
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
		// const text = this.refs.input.value;
		// ModalManager.open(<MyModal text={text} onRequestClose={() => true} />);
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
