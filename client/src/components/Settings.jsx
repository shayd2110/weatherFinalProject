import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { PersonalSettings } from "./";
import { UsersList } from "../pages";
import $ from "jquery";

function Settings(props) {
	const [key, setKey] = useState("mySettings");
	var favoritesCities = $.map(props.favoritesCities, function (item) {
		return {
			label: item.name,
			value: item.value,
		};
	});

	return (
		<Tabs
			id="controlled-tab-example"
			activeKey={key}
			onSelect={(k) => setKey(k)}
		>
			<Tab eventKey="mySettings" title="הגדרות פרופיל">
				<PersonalSettings
					userId={props.userId}
					favoritesCities={favoritesCities}
				/>
			</Tab>
			{props.isAdmin ? (
				<Tab eventKey="adminSettings" title="הגדרות מנהל">
					<UsersList />
				</Tab>
			) : null}
		</Tabs>
	);
}

export default Settings;
