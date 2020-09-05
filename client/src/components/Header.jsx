import React, { useContext } from "react";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import Scroll from "react-scroll";
import UserContext from "../context/user-context";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Map } from "../pages";
import Logo from "./Logo";

function Header() {
  const { userData, setUserData } = useContext(UserContext);
  const ScrollLink = Scroll.ScrollLink;
  console.log("userData", userData);
  const logout = () => {
    setUserData({
      loggedIn: false,
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
      <div className="container">
        <Logo />
        <Navbar.Brand href="#home">מזג-אוויר ישראל</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ml-auto">
            <Nav.Item as="li">
              <Nav.Link href="#portfolio">
                ערים נבחרות
                <ScrollLink
                  to="example-destination"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="some-class"
                  activeClass="some-active-class"
                ></ScrollLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#about">אודות</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Switch>
                <Route path="/map" exact component={Map} />
              </Switch>
              <Nav.Link href="\map">מפת ערי ישראל</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link onClick={logout}>התנתק/י</Nav.Link>
            </Nav.Item>
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
