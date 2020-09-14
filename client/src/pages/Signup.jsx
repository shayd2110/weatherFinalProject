import React, { Component } from "react";
import { LinkToLogin, ErrorNotice } from "../components";
import { Modal, ModalManager, Effect } from "react-dynamic-modal";
import { GoX } from "react-icons/go";
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
		margin: "4% auto",
		width: "25%",
		border: "1px solid rgba(0, 0, 0, .2)",
		background: "#2c3e50",
		color: "#fff",
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
					<h5>{`!שלום ${data.firstName} ${data.lastName}, תהליך ההרשמה בוצע בהצלחה `}</h5>
				</div>
				<div className="modal-footer">
					<button
						type="button"
						className="btn btn-primary"
						onClick={ModalManager.close}
					>
						<i className="fas fa-times fa-fw"></i>
						אישור
					</button>
				</div>
			</Modal>
		);
	}
}

class Signup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: "",
			lastName: "",
			emailAddress: "",
			password: "",
			error: false,
			message: "",
		};
		this.toggle = this.toggle.bind(this);
	}

	openModal(firstName, lastName) {
		const payload = {
			firstName: firstName,
			lastName: lastName,
		};

		ModalManager.open(
			<MyModal data={payload} onRequestClose={() => true} />
		);
	}

	toggle() {
		this.setState({ error: false });
	}

	handleChangeInputFirstName = async (event) => {
		const firstName = event.target.value;
		this.setState({ firstName });
	};

	handleChangeInputLastName = async (event) => {
		const lastName = event.target.value;
		this.setState({ lastName });
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
		const { firstName, lastName, emailAddress, password } = this.state;
		const payload = { firstName, lastName, emailAddress, password };

		this.openModal.bind(this);

		await api.insertUser(payload).then((res) => {
			if (res.data.success) {
				this.setState({
					error: false,
					message: "",
				});

				this.setState({
					firstName: "",
					lastName: "",
					emailAddress: "",
					password: "",
				});

				this.openModal(payload.firstName, payload.lastName);
			} else {
				this.setState({
					error: !res.data.success,
					message: res.data.message,
				});
			}
		});
	};

	render() {
		const {
			firstName,
			lastName,
			emailAddress,
			password,
			error,
			message,
		} = this.state;
		return (
			<Wrapper>
				<h3>הרשמה</h3>

				{error ? (
					<div onClick={this.toggle}>
						<ErrorNotice error={true} message={message} />
					</div>
				) : (
					""
				)}

				<Label>:שם פרטי</Label>
				<InputText
					type="text"
					value={firstName}
					onChange={this.handleChangeInputFirstName}
					className="form-control"
					placeholder="הכנס שם פרטי"
					style={{ textAlign: "right" }}
				/>

				<Label>:שם משפחה</Label>
				<InputText
					type="text"
					value={lastName}
					onChange={this.handleChangeInputLastName}
					className="form-control"
					placeholder="הכנס שם משפחה"
					style={{ textAlign: "right" }}
				/>

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

				<Button onClick={this.handleIncludeUser}>!הרשם</Button>

				<LinkToLogin />
			</Wrapper>
		);
	}
}

export default Signup;
