import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
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
	const [redirect, setRedirect] = useState("");
	const [canRedirect, setCanRedirect] = useState();

	const handleIncludeUser = async (e) => {
		e.preventDefault();

		const payload = { emailAddress, password, checked: isChecked };
		await api.connectUser(payload).then((res) => {
			if (res.data.success) {
				setUserData({
					loggedIn: true,
					token: res.data.token,
					user: res.data.user,
				});
				localStorage.setItem("auth-token", res.data.token);
			} else {
				setError({ errorFound: true, message: res.data.message });
			}
		});
	};

	const clearError = (e) => {
		e.preventDefault();
		setError({ errorFound: false, message: "" });
	};

	if (canRedirect) {
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
						זכור אותי (יום)
					</Label>
				</div>
			</div>

			<>
				<Button onClick={(e) => handleIncludeUser(e)}>!התחבר</Button>
			</>
		</Wrapper>
	);
}

export default Login;
