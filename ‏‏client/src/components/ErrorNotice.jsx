import React, { Component } from "react";
import styled from "styled-components";
import { CencleLogo } from "./";
const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 -8px;
`;

const InnerWrapper = styled.div.attrs({
  className: "error-notice",
})`
  margin: 0 10px;
`;

const Label = styled.label`
  margin: 2px;
  font-size: 0.85rem;
`;

class ErrorNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: true,
      message: props.message,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ message: nextProps.message });
  }

  render() {
    var errorInfo = this.state.error;
    return (
      <>
        {errorInfo ? (
          <Wrapper>
            <InnerWrapper onClick={this.toggle}>
              <CencleLogo />
              <Label>{this.state.message}</Label>
            </InnerWrapper>
          </Wrapper>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default ErrorNotice;
