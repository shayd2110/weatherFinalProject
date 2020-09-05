import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LinkToLogin, ErrorNotice } from "../components";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h3",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 10px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control has-feedback",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary btn-block btn-flat`,
})`
  margin: 15px 15px 15px 5px;
`;

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      error: false,
      message: "",
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ error: false });
  }

  handleChangeInputFirstName = async (event) => {
    const firstName = event.target.value;
    this.setState({ firstName });
  };

  handleChangeInputLastName = async (event) => {
    const lastName = event.target.value;
    this.setState({ lastName });
  };

  handleChangeInputEmail = async (event) => {
    const emailAddress = event.target.value;
    this.setState({ emailAddress });
  };

  handleChangeInputPassword = async (event) => {
    const password = event.target.value;
    this.setState({ password });
  };

  handleIncludeUser = async () => {
    const { firstName, lastName, emailAddress, password } = this.state;
    const payload = { firstName, lastName, emailAddress, password };

    await api.insertUser(payload).then((res) => {
      if (res.data.success) {
        window.alert(`User Create successfully`);
        this.setState({
          error: false,
          message: "",
        });
      } else {
        //window.alert(res.data.message);
        this.setState({
          error: !res.data.success,
          message: res.data.message,
        });
      }
      // this.setState({
      //   firstName: "",
      //   lastName: "",
      //   emailAddress: "",
      //   password: "",
      // });
    });
  };

  render() {
    const {
      firstName,
      lastName,
      emailAddress,
      password,
      error,
      message,
    } = this.state;
    return (
      <Wrapper>
        <h3>הרשמה</h3>

        {error ? (
          <div onClick={this.toggle}>
            <ErrorNotice error={true} message={message} />
          </div>
        ) : (
          ""
        )}

        <Label>:שם פרטי</Label>
        <InputText
          type="text"
          value={firstName}
          onChange={this.handleChangeInputFirstName}
          className="form-control"
          placeholder="הכנס שם פרטי"
          style={{ textAlign: "right" }}
        />

        <Label>:שם משפחה</Label>
        <InputText
          type="text"
          value={lastName}
          onChange={this.handleChangeInputLastName}
          className="form-control"
          placeholder="הכנס שם משפחה"
          style={{ textAlign: "right" }}
        />

        <Label>:כתובת אימייל</Label>
        <InputText
          type="email"
          value={emailAddress}
          onChange={this.handleChangeInputEmail}
          className="form-control"
          placeholder="הכנס אימייל"
          style={{ textAlign: "right" }}
        />

        <Label>:סיסמא </Label>
        <InputText
          type="password"
          value={password}
          onChange={this.handleChangeInputPassword}
          className="form-control"
          placeholder="הכנס סיסמא"
          style={{ textAlign: "right" }}
        />

        <Button onClick={this.handleIncludeUser}>!הרשם</Button>

        <LinkToLogin />
      </Wrapper>
    );
  }
}

export default Signup;
