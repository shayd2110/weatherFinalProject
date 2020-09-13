import React, { Component } from "react";
import { BrowserRouter, Redirect } from "react-router-dom";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModalManager } from "react-dynamic-modal";
import api from "../api";
import $ from "jquery";

class PersonalSettings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: props.userId,
			myCitiesBefore: [...props.favoritesCities],
			myCitiesAfter: [...props.favoritesCities],
			allCity: [],
		};
	}

	componentDidMount = () => {};

	componentWillMount = () => {
		this.getAllCitiesToUser();
	};

	getAllCitiesToUser = () => {
		api.getAllCities().then((res) => {
			var allCity = $.map(res.data.data, function (item) {
				return {
					label: item.name,
					value: item._id,
				};
			});
			this.setState({ allCity });
		});
	};

	handleSave = async () => {
		const { myCitiesBefore, myCitiesAfter, userId } = this.state;
		let isChanged = false;
		for (let index = 0; index < myCitiesAfter.length; index++) {
			if (myCitiesBefore[index].value != myCitiesAfter[index].value) {
				const payload = {
					favoriteIndex: index + 1,
					cityId: myCitiesAfter[index].value,
				};
				isChanged = true;
				api.updateFavorite(userId, payload);
			}
		}
		if (isChanged) {
			$("#saveChangeSuccessfully").attr("hidden", false);
		}
	};

	handleChange = (value, index) => {
		$("#saveChangeSuccessfully").attr("hidden", true);
		this.state.myCitiesAfter[index] = {
			label: value.label,
			value: value.value,
		};
	};

	render() {
		return (
			<div>
				<div style={{ margin: "30px" }} className="row">
					<div className="col-sm">
						<div className="right-text">:1 עיר מועודפת</div>
						<Select
							className="select-col"
							options={this.state.allCity}
							onChange={(e) => this.handleChange(e, 0)}
							defaultValue={this.state.myCitiesBefore[0]}
						></Select>
						<br />
						<div className="right-text">:4 עיר מועודפת</div>
						<Select
							className="select-col"
							options={this.state.allCity}
							onChange={(e) => this.handleChange(e, 3)}
							defaultValue={this.state.myCitiesBefore[3]}
						/>
					</div>
					<div className="col-sm">
						<div className="right-text">:2 עיר מועודפת</div>
						<Select
							className="select-col"
							options={this.state.allCity}
							onChange={(e) => this.handleChange(e, 1)}
							defaultValue={this.state.myCitiesBefore[1]}
						/>
						<br />
						<div className="right-text">:5 עיר מועודפת</div>
						<Select
							className="select-col"
							options={this.state.allCity}
							onChange={(e) => this.handleChange(e, 4)}
							defaultValue={this.state.myCitiesBefore[4]}
						/>
					</div>
					<div className="col-sm">
						<div className="right-text">:3 עיר מועודפת</div>
						<Select
							className="select-col"
							options={this.state.allCity}
							onChange={(e) => this.handleChange(e, 2)}
							defaultValue={this.state.myCitiesBefore[2]}
						/>
						<br />
						<div className="right-text">:6 עיר מועודפת</div>
						<Select
							className="select-col"
							options={this.state.allCity}
							onChange={(e) => this.handleChange(e, 5)}
							defaultValue={this.state.myCitiesBefore[5]}
						/>
					</div>
				</div>

				<div style={{ paddingTop: "7%" }} className="modal-footer">
					<BrowserRouter>
						<button
							type="button"
							className="btn btn-primary"
							onClick={this.handleSave}
						>
							<Redirect to={"/home"} />
							שמור
						</button>
					</BrowserRouter>
					<button
						type="button"
						className="btn btn-primary"
						onClick={ModalManager.close}
					>
						<i className="fas fa-times fa-fw"></i>
						סגור
					</button>
				</div>
			</div>
		);
	}
}

export default PersonalSettings;
