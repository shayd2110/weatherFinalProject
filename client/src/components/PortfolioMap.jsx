import React, { Component } from "react";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import { Modal, ModalManager, Effect } from "react-dynamic-modal";
import PortfolioItemDetails from "./PortfolioItemDetails";
import { GoX } from "react-icons/go";
import { FaStar } from "react-icons/fa";
require("dotenv").config();

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
						lat={data.lat}
						lng={data.lng}
						cityName={data.address}
						geolocation={data.geolocation}
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

class PortfolioMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			address: "",
			city: "",
			area: "",
			country: "",
			zoom: 8,
			center: { lat: 31.767407, lng: 35.21038 },
			mapPosition: { lat: 31.767407, lng: 35.21038 },
			markerPosition: { lat: 0, lng: 0 },
		};
	}

	componentDidMount = () => {
		// debugger;
		console.log(this.props.location.pathname == "/home-map");
		if (navigator.geolocation) {
			if (this.props.location.pathname == "/home-map") {
				navigator.geolocation.getCurrentPosition((currentPos) => {
					this.setState({
						mapPosition: {
							lat: currentPos.coords.latitude,
							lng: currentPos.coords.longitude,
						},
					});
					const mapPosition = this.state.mapPosition;
					Geocode.fromLatLng(mapPosition.lat, mapPosition.lng).then(
						(newAddress) => {
							let full_address = newAddress.results[0];
							let res = full_address.formatted_address.split(",");
							this.openModal(
								full_address.formatted_address,
								mapPosition.lat,
								mapPosition.lng,
								true
							);
						}
					);
				});
			}
		}
	};

	onMapClick = (e) => {
		var newLat = e.latLng.lat();
		var newLng = e.latLng.lng();
		Geocode.fromLatLng(newLat, newLng).then((newAddress) => {
			let full_address = newAddress.results[0];
			let res = full_address.formatted_address.split(",");
			let address = res[0];
			let city = res[1];
			let state = res[2];
			this.openModal(
				full_address.formatted_address,
				newLat,
				newLng,
				false
			);
		});
	};

	openModal(full_address, newLat, newLng, isGeolocation) {
		const payload = {
			address: full_address,
			lat: newLat,
			lng: newLng,
			geolocation: isGeolocation,
		};

		ModalManager.open(
			<MyModal data={payload} onRequestClose={() => true} />
		);
	}

	render() {
		const mapPosition = this.state.mapPosition;
		Geocode.setApiKey(
			"AIzaSyDYqZJa_Xoo3dJekgc4wOKiWHnNZK_Pr3k&language=he&region=IL"
		);
		const url =
			"https://maps.googleapis.com/maps/api/js?key=AIzaSyDYqZJa_Xoo3dJekgc4wOKiWHnNZK_Pr3k&language=he&region=IL&v=3.exp&libraries=geometry,drawing,places";

		console.log(process.env.GOOGLE_MAP_API_KEY);
		const MapWithAMarker = withScriptjs(
			withGoogleMap((props) => (
				<GoogleMap
					defaultZoom={8}
					defaultCenter={{ lat: 31.767407, lng: 35.21038 }}
					onClick={(e) => this.onMapClick(e)}
				>
					<Marker position={mapPosition} />
				</GoogleMap>
			))
		);
		return (
			<>
				<section className="page-section portfolio" id="selected">
					<div className="container">
						<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
							מפת ערי ישראל
						</h2>

						{/* -- Icon Divider -- */}
						<div className="divider-custom">
							<div className="divider-custom-line"></div>
							<div className="divider-custom-icon">
								<FaStar />
							</div>
							<div className="divider-custom-line"></div>
						</div>

						{/* !-- Portfolio Grid Items -- */}
						<div className="row">
							<div className="modal-body text-center">
								<div className="container">
									<div className="row justify-content-center">
										<div className="col-lg-8">
											<div className="app-title">
												<p>
													לחץ על עיר/ישוב במפה להצגת
													מזג-אוויר עכשוי
												</p>
											</div>

											<MapWithAMarker
												googleMapURL={url}
												loadingElement={
													<div
														style={{
															height: "100%",
														}}
													/>
												}
												containerElement={
													<div
														style={{
															height: "400px",
														}}
													/>
												}
												mapElement={
													<div
														style={{
															height: "100%",
														}}
													/>
												}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* !-- /.row -- */}
					</div>
				</section>
			</>
		);
	}
}

export default PortfolioMap;
