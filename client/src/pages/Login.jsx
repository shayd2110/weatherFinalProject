import React, { useContext, useState, useRef } from "react";
import { Link, Redirect } from "react-router-dom";

import ErrorNotice from "../components/ErrorNotice";
import UserContext from "../context/user-context";
import api from "../api";

import styled from "styled-components";

const Wrapper = styled.div.attrs({
	className: "form-group",
})`
	margin: 0 10px;
`;

const Label = styled.label`
	margin: 5px;
	color: #f8f9fa;
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

function Login() {
	const { userData, setUserData } = useContext(UserContext);
	const [emailAddress, setEmailAddress] = useState();
	const [password, setPassword] = useState();
	const [isChecked, setIsChecked] = useState(false);
	const [error, setError] = useState({
		errorFound: false,
		message: "",
	});
	const [redirect, setRedirect] = useState();

	const handleIncludeUser = async (e) => {
		e.preventDefault();

		const payload = { emailAddress, password, checked: isChecked };
		console.log("payload", payload);
		const port = process.env.PORT || 3000;
		console.log("port is: ", port);
		await api.connectUser(payload).then((res) => {
			if (res.data.success) {
				console.log("ok", res.data);
				localStorage.setItem("auth-token", res.data.token);
				setRedirect("/home");
				setUserData({
					loggedIn: true,
					token: res.data.token,
					user: res.data.user,
				});
			} else {
				setError({ errorFound: true, message: res.data.message });
			}
		});
	};

	const clearError = (e) => {
		e.preventDefault();
		setError({ errorFound: false, message: "" });
	};

	const pro = process.env;
	console.log("redirect", redirect);
	console.log("error", error);
	console.log("baseURL is: ", api.baseURL4Real);
	console.log("port is: ", api.port);
	console.log("NODE_ENV is: ", process.env.NODE_ENV);

	if (redirect) {
		return <Redirect to={redirect} />;
	}
	return (
		<Wrapper>
			<h3>התחברות</h3>
			{error.errorFound ? (
				<div onClick={(e) => clearError(e)}>
					<ErrorNotice message={error.message} />
				</div>
			) : null}

			<Label>:כתובת אימייל</Label>
			<InputText
				type="email"
				value={emailAddress}
				onChange={(e) => {
					setEmailAddress(e.target.value);
				}}
				className="form-control"
				placeholder="הכנס אימייל"
				style={{ textAlign: "right" }}
			/>

			<Label>:סיסמא </Label>
			<InputText
				type="password"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				className="form-control"
				placeholder="הכנס סיסמא"
				style={{ textAlign: "right" }}
			/>

			<div className="form-group">
				<div className="custom-control custom-checkbox">
					<input
						type="checkbox"
						onChange={(e) => {
							setIsChecked(e.target.value);
						}}
						defaultChecked={isChecked}
						className="custom-control-input"
						id="rememberMe"
					/>
					<Label
						className="custom-control-label"
						htmlFor="rememberMe"
					>
						זכור אותי
					</Label>
				</div>
			</div>

			<>
				<Button onClick={(e) => handleIncludeUser(e)}>!התחבר</Button>
				{/* <Link to={"/test"}>LALA </Link> */}
			</>
		</Wrapper>
	);
}

export default Login;
