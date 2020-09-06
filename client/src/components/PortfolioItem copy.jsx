/* eslint-disable react/prop-types */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import PortfolioItemDetails from "./PortfolioItemDetails";
import Popup from "reactjs-popup";
import Modal from "react-modal";
import "../app/index.css";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

// Modal.setAppElement("#main");

class PortfolioItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false,
		};

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ modalIsOpen: true });
	}

	afterOpenModal() {
		// references are now sync'd and can be accessed.
		//this.subtitle.style.color = "#f00";
	}

	closeModal() {
		this.state.modalIsOpen = false;
		console.log("first", this.state.modalIsOpen);
		//this.setState({ modalIsOpen: false });
	}

	render() {
		console.log("s", this.state.modalIsOpen);
		return (
			<div className="col-md-6 col-lg-4" onClick={this.openModal}>
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
					<img
						src={this.props.imgUrl}
						className="img-fluid"
						alt=""
						// onClick={this.imageClick()}
					/>
				</div>

				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<div>
						<PortfolioItemDetails
							modalName={this.props.modalName}
							imgUrl={this.props.imgUrl}
							lat={this.props.lat}
							lng={this.props.lng}
							cityName={this.props.name}
						/>
						<button onClick={this.closeModal}>close</button>
					</div>
				</Modal>
			</div>
		);
	}
}

export default PortfolioItem;
