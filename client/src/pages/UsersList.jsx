import React, { Component } from "react";
import ReactTable from "react-table-6";
import api from "../api";
import $ from "jquery";
import styled from "styled-components";
import "react-table-6/react-table.css";

const Wrapper = styled.div`
	padding: 0 40px 40px 40px;
`;

const Delete = styled.div`
	color: #ff0000;
	cursor: pointer;
`;

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
		if (this.props.admin) {
			return <Delete disabled>Delete-Lock</Delete>;
		}
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
			this.setState({
				usersList: users.data.data,
				isLoading: false,
			});
		});
	};

	render() {
		$("#saveChangeSuccessfully").attr("hidden", true);
		const { usersList, isLoading } = this.state;

		const columns = [
			{
				Header: "Id",
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
				Cell: function (props) {
					return (
						<div style={{ textAlign: "center" }}>
							{props.original.admin ? (
								<span>Yes</span>
							) : (
								<span>No</span>
							)}
						</div>
					);
				},
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
								admin={props.original.admin}
							/>
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
