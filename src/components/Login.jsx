/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import api from "../api";

export default class Login extends Component {
	handleIncludeUser = async () => {
		const { email, password } = this.state;
		const payload = { email, password };

		alert(payload.firstName + " " + payload.lastName);
		await api.insertUser(payload).then((res) => {
			window.alert("User Signup successfully");
		});
	};

	render() {
		return (
			<form>
				<h3>התחברות</h3>

				<div className="form-group">
					<label>:כתובת אימייל</label>
					<input
						type="email"
						className="form-control"
						placeholder="הכנס כתובת"
						style={{ textAlign: "right" }}
					/>
				</div>

				<div className="form-group">
					<label>:סיסמא</label>
					<input
						type="password"
						className="form-control"
						placeholder="הכנס סיסמא"
						style={{ textAlign: "right" }}
					/>
				</div>

				<div className="form-group">
					<div className="custom-control custom-checkbox">
						<input
							type="checkbox"
							className="custom-control-input"
							id="rememberMe"
						/>
						<label
							className="custom-control-label"
							htmlFor="rememberMe"
						>
							זכור אותי
						</label>
					</div>
				</div>

				<button
					type="submit"
					className="btn btn-primary btn-block"
					onClick={this.handleIncludeUser}
				>
					התחבר/י
				</button>
				<p className="forgot-password text-right">
					?שכחת <a href="#">סיסמא</a>
				</p>
			</form>
		);
	}
}
