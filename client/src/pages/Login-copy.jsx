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
		e.preventdefault();
		const payload = { emailAddress, password, checked: isChecked };
		console.log("payload", payload);
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

	console.log("redirect", redirect);
	console.log("error", error);
	if (redirect) {
		return <Redirect to={redirect} />;
	}
	return (
		<Wrapper>
			<h3>�������</h3>
			{error.errorFound ? (
				<div onClick={setError({ errorFound: false, message: "" })}>
					<ErrorNotice message={error.message} />
				</div>
			) : null}

			<Label>:����� ������</Label>
			<InputText
				type="email"
				value={emailAddress}
				onChange={(e) => {
					setEmailAddress(e.target.value);
				}}
				className="form-control"
				placeholder="���� ������"
				style={{ textAlign: "right" }}
			/>

			<Label>:����� </Label>
			<InputText
				type="password"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				className="form-control"
				placeholder="���� �����"
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
						���� ����
					</Label>
				</div>
			</div>

			<>
				<Button onClick={handleIncludeUser}>!�����</Button>
				{/* <Link to={"/test"}>LALA </Link> */}
			</>
		</Wrapper>
	);
}

export default Login;
