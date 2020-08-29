/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
	className: "h3",
})``;

const Wrapper = styled.div.attrs({
	className: "form-group",
})`
	margin: 0 10px;
`;

const Label = styled.label`
	margin: 5px;
`;

const InputText = styled.input.attrs({
	className: "form-control has-feedback",
})`
	margin: 5px;
`;

const Button = styled.button.attrs({
	className: "btn btn-primary btn-block btn-flat",
})`
	margin: 15px 15px 15px 5px;
`;

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			emailAddress: "",
			password: "",
		};
	}

	componentDidMount = async () => {
		this.setState({ isLoading: true });

		await api.getCookieUser().then((res) => {
			window.alert(res.data.message);
		});
	};

	handleChangeInputEmail = async (event) => {
		const emailAddress = event.target.value;
		this.setState({ emailAddress });
	};

	handleChangeInputPassword = async (event) => {
		const password = event.target.value;
		this.setState({ password });
	};

	handleIncludeUser = async () => {
		const { emailAddress, password } = this.state;
		const payload = { emailAddress, password };

		await api.connectUser(payload).then((res) => {
			if (res.data.success) {
				window.alert("User Login successfully");
			} else {
				window.alert(`User Login failed: ${res.data.message}`);
			}

			this.setState({
				emailAddress: "",
				password: "",
			});
		});
	};

	render() {
		const { emailAddress, password } = this.state;
		return (
			<Wrapper>
				<h3>התחברות</h3>

				<Label>:כתובת אימייל</Label>
				<InputText
					type="email"
					value={emailAddress}
					onChange={this.handleChangeInputEmail}
					className="form-control"
					placeholder="הכנס אימייל"
					style={{ textAlign: "right" }}
				/>

				<Label>:סיסמא </Label>
				<InputText
					type="password"
					value={password}
					onChange={this.handleChangeInputPassword}
					className="form-control"
					placeholder="הכנס סיסמא"
					style={{ textAlign: "right" }}
				/>

				<div className="form-group">
					<div className="custom-control custom-checkbox">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customCheck1"
						/>
						<label
							className="custom-control-label"
							htmlFor="customCheck1"
						>
							זכור אותי
						</label>
					</div>
				</div>

				<Button onClick={this.handleIncludeUser}>!התחבר</Button>
				{/* <p className="forgot-password text-right">
          ?שכחת <a href="#">סיסמא</a>
        </p> */}
			</Wrapper>
		);
	}
}

export default Login;
