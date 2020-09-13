import React, { Component } from "react";
import PortfolioParseDetails from "./PortfolioParseDetails";

class PortfolioItemDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			data: [],
			lat: props.lat,
			lng: props.lng,
			cityName: props.cityName,
		};
	}

	async componentDidMount() {
		console.log("lat", this.props.lng);
		let _darkskyApiKey = "014dd470e25bffea4a246375af37ba17";
		let _darkskyUnits = "ca"; // or "si" or "us"
		let _darkskyLang = "he"; // hebrew
		const url = `https://cors-anywhere.herokuapp.com/https://api.forecast.io/forecast/${_darkskyApiKey}/${this.props.lat},${this.props.lng}?&lang=${_darkskyLang}&units=${_darkskyUnits}`;
		const response = await fetch(url);
		const tempData = await response.json();
		let tmpArray = [];

		Object.entries(tempData).map((postData) => {
			tmpArray.push(postData);
		});
		this.setState({ data: tmpArray, loading: false });
	}

	render() {
		const { loading, data, lat, lng, cityName } = this.state;
		return (
			<div className="modal-body text-center">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							{/* !-- Portfolio Modal  --! */}
							{loading ? (
								<h2>...טוען</h2>
							) : (
								<PortfolioParseDetails
									data={data}
									cityName={cityName}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PortfolioItemDetails;
