import React, { Component } from "react";
import axios from "axios";
import Button from "./Button.jsx";
import iconSubmit from "../images/Resources/Icon_Submit.svg";
import iconValid from "../images/Resources/Icon_Valid.svg";

class Form extends Component {
  state = {
    isChecked: false, // used to conditionally show address inputs on checkbox check
    addPhone: false, // used to show 2nd phone number on button click
    FullName: "",
    EmailAddress: "",
    PhoneNumber: "",
    PhoneNumber2: "",
    CompanyName: "",
    Message: "",
    AddressLine1: "",
    AddressLine2: "",
    CityTown: "",
    StateCounty: "",
    Postcode: "",
    Country: "",
    apiResponse: [], // data requirements reponse received from api
    submitHappened: false, // used to show submission successful message when api call is successful
    // but without unmet requirements
  };

  radioCheck = (e) => {
    // handle the checkbox to show the address inputs
    this.setState({ isChecked: e.target.checked });
  };

  handleChange = (e) => {
    // handle inputs, put data into separate parts of state

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    // post the form data to the api
    e.preventDefault(); // preventDefault to stop page reloading
    // check for .active inputs from previous failed submit and remove class active
    if (document.querySelectorAll(".active") !== null) {
      document.querySelectorAll(".active").forEach((active) => {
        active.classList.remove("active");
      });
    }
    // JSON the form data
    const body = JSON.stringify({
      FullName: this.state.FullName,
      EmailAddress: this.state.EmailAddress,
      PhoneNumber: this.state.PhoneNumber,
      PhoneNumber2: this.state.PhoneNumber2,
      CompanyName: "hello",
      Message: this.state.Message,
      bIncludeAddressDetails: this.state.isChecked,
      AddressLine1: this.state.AddressLine1,
      AddressLine2: this.state.AddressLine2,
      CityTown: this.state.CityTown,
      StateCounty: this.state.StateCounty,
      Postcode: this.state.Postcode,
      Country: this.state.Country,
    });
    const url =
      "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit";
    axios({
      method: "post",
      url: url,
      data: body,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.dir(res);
        this.setState({ apiResponse: res.data.Errors, submitHappened: true });
        console.log(this.state.apiResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="name-email-wrapper">
          <label htmlFor="name" className="name">
            Full Name
            <input
              type="text"
              name="FullName"
              id="FullName"
              value={this.state.FullName}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="email" className="email">
            Email address
            <input
              type="email"
              name="EmailAddress"
              id="EmailAddress"
              value={this.state.EmailAddress}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <label htmlFor="phone-01" className="phone-01">
          Phone number <span>- optional</span>
          <input
            type="number"
            name="PhoneNumber"
            id="PhoneNumber"
            value={this.state.PhoneNumber}
            onChange={this.handleChange}
          />
        </label>
        {this.state.addPhone ? (
          <label htmlFor="phone" className="phone-02">
            Phone number 02 <span>- optional</span>
            <input
              type="number"
              name="PhoneNumber2"
              id="PhoneNumber2"
              value={this.state.PhoneNumber2}
              onChange={this.handleChange}
            />
          </label>
        ) : null}
        <button type="button" onClick={() => this.setState({ addPhone: true })}>
          Add new phone number
        </button>
        <label htmlFor="message" className="message">
          <div>
            <p>Message</p>
            <p>
              <small>Maximum text length is 500 characters</small>
            </p>
          </div>
          <textarea
            name="Message"
            id="Message"
            value={this.state.Message}
            onChange={this.handleChange}
            maxLength="500"
          />
        </label>
        <label htmlFor="radio" className="add-radio-btn">
          <input
            type="checkbox"
            checked={this.state.isChecked}
            name="radio"
            onChange={this.radioCheck}
          />
          Add address details
        </label>
        {this.state.isChecked ? (
          <div className="address">
            <label htmlFor="line-1">
              Address line 1
              <input
                type="text"
                name="AddressLine1"
                id="AddressLine1"
                value={this.state.AddressLine1}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="line-2">
              Address line 2
              <input
                type="text"
                name="AddressLine2"
                id="AddressLine2"
                value={this.state.AddressLine2}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="city">
              City / Town
              <input
                type="text"
                name="CityTown"
                id="CityTown"
                value={this.state.CityTown}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="county">
              County
              <input
                type="text"
                name="StateCounty"
                id="StateCounty"
                value={this.state.StateCounty}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="postcode">
              Postcode
              <input
                type="text"
                name="Postcode"
                id="Postcode"
                value={this.state.Postcode}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="country">
              Country
              <input
                type="text"
                name="Country"
                id="Country"
                value={this.state.Country}
                onChange={this.handleChange}
              />
            </label>
          </div>
        ) : null}
        <div className="submit-wrapper">
          <img src={iconSubmit} alt="icon-submit" className="icon-submit" />
          <input type="submit" value="Submit" className="submit"></input>
        </div>
        {this.state.apiResponse.length > 0 ? (
          <div>
            {this.state.apiResponse.map((item, i) => {
              return document
                .querySelector(`#${item.FieldName}`)
                .classList.add("active");
            })}
            <div className="failed-submit">
              Please fill in the required fields highlighted in red
            </div>
          </div>
        ) : this.state.submitHappened ? (
          <div className="validated-wrapper">
            <img src={iconValid} alt="icon-valid" className="icon-valid" />
            <p>Your submission was successful</p>
          </div>
        ) : null}
      </form>
    );
  }
}

export default Form;
