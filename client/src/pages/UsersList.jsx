import React, { Component } from "react";

import ReactTable from "react-table-6";
import api from "../api";

import styled from "styled-components";

import "react-table-6/react-table.css";

const Wrapper = styled.div`
	padding: 0 40px 40px 40px;
`;

const Update = styled.div`
	color: #ef9b0f;
	cursor: pointer;
`;

const Delete = styled.div`
	color: #ff0000;
	cursor: pointer;
`;

class UpdateUser extends Component {
	updateUser = (event) => {
		event.preventDefault();

		window.location.href = `/users/update/${this.props.id}`;
	};

	render() {
		return <Update onClick={this.updateUser}>Update</Update>;
	}
}

class DeleteUser extends Component {
	deleteUser = (event) => {
		event.preventDefault();

		if (
			window.confirm(
				`Do tou want to delete the user ${this.props.firstName} ${this.props.lastName} permanently?`
			)
		) {
			api.deleteUserById(this.props.id);
			window.location.reload();
		}
	};

	render() {
		return <Delete onClick={this.deleteUser}>Delete</Delete>;
	}
}

class UsersList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usersList: [],
			isLoading: false,
			columns: [],
		};
	}

	componentDidMount = async () => {
		this.setState({ isLoading: true });

		await api.getAllUsers().then((users) => {
			console.log("here1!!!", users.data.data);
			this.setState({
				usersList: users.data.data,
				isLoading: false,
			});
		});
	};

	render() {
		console.log("here2!!!", this.state.usersList);
		const { usersList, isLoading } = this.state;
		console.log("TCL: usersList -> render -> users", usersList);

		const columns = [
			{
				Header: "ID",
				accessor: "_id",
				filterable: true,
			},
			{
				Header: "FirstName",
				accessor: "firstName",
				filterable: true,
			},
			{
				Header: "LastName",
				accessor: "lastName",
				filterable: true,
			},
			{
				Header: "EmailAddress",
				accessor: "emailAddress",
				filterable: true,
			},
			{
				Header: "Password",
				accessor: "password",
				filterable: true,
			},
			{
				Header: "Admin",
				accessor: "admin",
				filterable: true,
			},
			{
				Header: "",
				accessor: "",
				Cell: function (props) {
					return (
						<span>
							<DeleteUser
								id={props.original._id}
								firstName={props.original.firstName}
								lastName={props.original.lastName}
							/>
						</span>
					);
				},
			},
			{
				Header: "",
				accessor: "",
				Cell: function (props) {
					return (
						<span>
							<UpdateUser id={props.original._id} />
						</span>
					);
				},
			},
		];
		let showTable = true;
		if (!usersList.length) {
			showTable = false;
		}

		return (
			<Wrapper>
				{showTable && (
					<ReactTable
						data={usersList}
						columns={columns}
						loading={isLoading}
						defaultPageSize={10}
						showPageSizeOptions={true}
						minRows={0}
					/>
				)}
			</Wrapper>
		);
	}
}

export default UsersList;
