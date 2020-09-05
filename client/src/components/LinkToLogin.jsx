import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
  className: "collpase navbar-collapse",
})``;

const List = styled.div.attrs({
  className: "navbar-nav mr-auto",
})``;

const Item = styled.div.attrs({
  className: "collpase navbar-collapse",
})``;

class LinkToLogin extends Component {
  render() {
    return (
      <React.Fragment>
        <p className="forgot-password text-right">
          משתמש רשום? <Link to={"/sign-in"}>התחבר/י</Link>
        </p>
      </React.Fragment>
    );
  }
}

export default LinkToLogin;
