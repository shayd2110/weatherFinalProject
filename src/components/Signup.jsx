import React, { Component } from "react";
import api from "../api/index";
import * as Yup from "yup";

//import styled from "styled-components";
//import axios from "axios";
//import swal from "sweetalert";

const valitionSechema = Yup.object().shape({
  fisrtNane: Yup.string(),
  lastNane: Yup.string(),
  emailAddress: Yup.string(),
  password: Yup.string(),
});

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

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

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      formErrors: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
      },
    };
  }

  // handleChangeInputName = async (event) => {
  //   const name = event.target.value;
  //   this.setState({ name });
  // };

  // handleChangeInputRating = async (event) => {
  //   const rating = event.target.validity.valid
  //     ? event.target.value
  //     : this.state.rating;

  //   this.setState({ rating });
  // };

  // handleChangeInputTime = async (event) => {
  //   const time = event.target.value;
  //   this.setState({ time });
  // };

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

  handleIncludeMovie = async () => {
    const { firstName, lastName, emailAddress, password } = this.state;
    const payload = { firstName, lastName, emailAddress, password };

    await api.insertUser(payload).then((res) => {
      window.alert(`User inserted successfully`);
      this.setState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
      });
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email Address: ${this.state.emailAddress}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 2 ? "minimum 2 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 2 ? "minimum 2 characaters required" : "";
        break;
      case "emailAddress":
        formErrors.emailAddress = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  showForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) => {};

  render() {
    return (
      <form>
        <h3>הרשמה</h3>
        <div className="form-group has-feedback">
          <label>:שם פרטי</label>
          <input
            type="text"
            name="firstName"
            onChange={this.handleChangeInputFirstName}
            className="form-control"
            placeholder="הכנס שם פרטי"
            style={{ textAlign: "right" }}
          />
        </div>
        <div className="form-group has-feedback">
          <label>:שם משפחה</label>
          <input
            type="text"
            name="lastName"
            onChange={this.handleChangeInputLastName}
            className="form-control"
            placeholder="הכנס שם משפחה"
            style={{ textAlign: "right" }}
          />
        </div>
        <div className="form-group has-feedback">
          <label>:כתובת אימייל</label>
          <input
            type="email"
            name="emailAddress"
            onChange={this.handleChangeInputEmail}
            className="form-control"
            placeholder="הכנס אימייל"
            style={{ textAlign: "right" }}
          />
        </div>
        <div className="form-group has-feedback">
          <label>:סיסמא</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChangeInputPassword}
            className="form-control"
            placeholder="הכנס סיסמא"
            style={{ textAlign: "right" }}
          />
        </div>
        <button
          className="btn btn-primary btn-block btn-flat"
          onClick={this.handleIncludeMovie}
        >
          !הרשם
        </button>
        <p className="forgot-password text-right">
          משתמש רשום? <a href="#">התחבר/י</a>
        </p>
      </form>
    );
  }
}
