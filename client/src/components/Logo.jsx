import React, { Component } from "react";
import styled from "styled-components";

import logo from "../img/clouds-1293230.png";

const Wrapper = styled.a.attrs({
  className: "navbar-brand",
})``;

class Logo extends Component {
  render() {
    return (
      <Wrapper>
        <img src={logo} width="35" height="30" alt="weather" />
      </Wrapper>
    );
  }
}

export default Logo;
