/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import ErrorNotice from "../components/ErrorNotice";
import UserContext from "../context/user-context";
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
		//const [userData, setUserData] = useContext(UserContext);
		this.state = {
			emailAddress: "",
			password: "",
			isChecked: false,
			error: false,
			message: "",
			//userData: userData,
		};
		this.toggle = this.toggle.bind(this);
	}

	componentDidMount = async () => {
		this.setState({ isLoading: true });

		// await api.getCookieUser().then((res) => {
		//   window.alert(res.data.message);
		// });
	};

	toggle() {
		this.setState({ error: false });
	}

	handleChangeInputEmail = async (event) => {
		const emailAddress = event.target.value;
		this.setState({ emailAddress });
	};

	handleChangeInputPassword = async (event) => {
		const password = event.target.value;
		this.setState({ password });
	};

	handleChangeInputChecked = async (event) => {
		let isChecked = !this.state.isChecked;
		//this.setState({ isChecked: isChecked });
		this.state.isChecked = isChecked;
		console.log(this.state.isChecked);
	};

	handleIncludeUser = async () => {
		const { emailAddress, password, isChecked } = this.state;
		const payload = { emailAddress, password, checked: isChecked };
		console.log("payload", payload);
		await api.connectUser(payload).then((res) => {
			if (res.data.success) {
				window.alert("User Login successfully");
				console.log("ok", res.data);
				localStorage.setItem("auth-token", res.data.token);
				window.location.reload(true);
			} else {
				console.log("lala", res.data);
				//window.alert(`User Login failed: ${res.data.message}`);
				this.setState({
					error: !res.data.success,
					message: res.data.message,
				});
				//console.log("state", this.state);
			}

			// this.setState({
			//   emailAddress: "",
			//   password: "",
			//   isChecked: false,
			// });

			// console.log(this.state);
		});
	};

	render() {
		const { emailAddress, password, error, message } = this.state;
		console.log("state", this.state);
		return (
			<Wrapper>
				<h3>התחברות</h3>
				{error ? (
					<div onClick={this.toggle}>
						<ErrorNotice message={message} />
					</div>
				) : null}

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
							onChange={this.handleChangeInputChecked}
							defaultChecked={this.state.isChecked}
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

				<Button onClick={this.handleIncludeUser}>!התחבר</Button>
				{/* <p className="forgot-password text-right">
          ?שכחת <a href="#">סיסמא</a>
        </p> */}
			</Wrapper>
		);
	}
}

export default Login;
