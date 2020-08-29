import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar2 } from "../components";
import { UsersList, Signup, Login, UsersUpdate } from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
	return (
		<Router>
			<NavBar2 />
			<div className="auth-wrapper  bg-primary">
				<div className="auth-inner text-right">
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/sign-in" exact component={Login} />
						<Route path="/sign-up" exact component={Signup} />
						<Route path="/users/create" exact component={Signup} />
					</Switch>
				</div>
			</div>
			<Switch>
				<Route path="/users/list" exact component={UsersList} />
				<Route path="/users/update/:id" exact component={UsersUpdate} />
			</Switch>
		</Router>
	);
}

export default App;
