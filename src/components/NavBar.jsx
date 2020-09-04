import React, { useContext } from "react";
import UserContext from "../context/user-context";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import { Links, LinksLoggedIn, Logo } from "./";
//import HomeNavBar from "./HomeNavBar";

const Container = styled.div.attrs({
	className: "container",
})``;

const Nav = styled.nav.attrs({
	className: "navbar navbar-expand-lg navbar-light text-uppercase fixed-top ",
})`
	margin-bottom: 20 px;
`;

// const funcComp2 = () => {
//   const [userData, setUserData] = useContext(UserContext);

//   if (userData) return <NavBar userData={userData} isLoggedIn={true} />;
//   return <NavBar userData={userData} />;
// };

// const WhichNavBar2 = () => {
//   const [userData, setUserData] = useContext(UserContext);
//   console.log("userData: ", this.state.isLoggedIn);
//   if (userData) return <NavBar userData={userData} isLoggedIn={true} />;
//   return <NavBar userData={userData} />;
// };

function NavBar() {
	const context = useContext(UserContext).userData;
	return (
		<Container>
			<Nav>
				<Logo />
				{context.loggedIn ? <LinksLoggedIn /> : <Links />}
			</Nav>
		</Container>
	);
}

export default NavBar;
