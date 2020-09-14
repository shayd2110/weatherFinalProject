import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Settings } from "./";
import { Modal, ModalManager, Effect } from "react-dynamic-modal";
import Nav from "react-bootstrap/Nav";
import UserContext from "../context/user-context";
import { GoX } from "react-icons/go";

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
		height: "38rem",
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
		const { isAdmin, userId, favoritesCities, onRequestClose } = this.props;

		return (
			<Modal
				onRequestClose={onRequestClose}
				effect={Effect.ScaleUp}
				style={defaultStyles}
			>
				<div className="modal-header">
					<div className="text-center">
						<h5 id="saveChangeSuccessfully" hidden="true">
							!השינויים נשמרו בהצלחה
						</h5>
					</div>

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
					<Settings
						isAdmin={isAdmin}
						userId={userId}
						favoritesCities={favoritesCities}
					/>
				</div>
			</Modal>
		);
	}
}

export default function Links() {
	const { userData, setUserData } = useContext(UserContext);

	const logout = () => {
		setUserData({
			loggedIn: false,
			token: undefined,
			user: undefined,
		});
		localStorage.setItem("auth-token", "");
	};

	const openModal = () => {
		ModalManager.open(
			<MyModal
				isAdmin={userData.user.admin}
				userId={userData.user._id}
				favoritesCities={userData.user.favoritesCities}
				onRequestClose={() => true}
			/>
		);
	};

	return (
		<ul className="navbar-nav ml-auto">
			<Nav.Item as="li">
				<Nav.Link>
					<Link
						to={"/home"}
						style={{ color: "inherit", textDecoration: "inherit" }}
					>
						ערים נבחרות
					</Link>
				</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link>
					<Link
						to={"/home-map"}
						style={{ color: "inherit", textDecoration: "inherit" }}
					>
						מפת ערי ישראל
					</Link>
				</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link href="#about">אודות</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link onClick={openModal.bind(this)}>
					<Link
						to={"/home-settings"}
						style={{ color: "inherit", textDecoration: "inherit" }}
					>
						הגדרות
					</Link>
				</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link onClick={logout}>
					<Link
						to={"/sign-in"}
						style={{ color: "inherit", textDecoration: "inherit" }}
					>
						התנתק/י
					</Link>
				</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link disabled>שלום {userData.user.firstName}</Nav.Link>
			</Nav.Item>
		</ul>
	);
}
