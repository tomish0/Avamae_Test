import React, { Component } from "react";
import axios from "axios";
import Button from "./Button.jsx";
import iconSubmit from "../images/Resources/Icon_Submit.svg";
import iconValid from "../images/Resources/Icon_Valid.svg";

class Form extends Component {
  state = {
    isChecked: false,
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
    apiResponse: [],
    submitHappened: false,
    removeHighlight: false,
  };

  radioCheck = (e) => {
    this.setState({ isChecked: e.target.checked });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  positiveResponse = (res) => {
    this.setState({ apiResponse: res.status });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (document.querySelectorAll(".active") !== null) {
      document.querySelectorAll(".active").forEach((active) => {
        active.classList.remove("active");
      });
    }
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
              id="FullName"
              name="FullName"
              value={this.state.FullName}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="email" className="email">
            Email address
            <input
              type="email"
              id="EmailAddress"
              name="EmailAddress"
              value={this.state.EmailAddress}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <label htmlFor="phone-01" className="phone-01">
          Phone number <span>- optional</span>
          <input
            type="number"
            id="PhoneNumber"
            name="PhoneNumber"
            value={this.state.PhoneNumber}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="phone" className="phone-02">
          Phone number 02 <span>- optional</span>
          <input
            type="number"
            id="PhoneNumber2"
            name="PhoneNumber2"
            value={this.state.PhoneNumber2}
            onChange={this.handleChange}
          />
        </label>
        <Button buttonTitle="Add new phone number" />
        <label htmlFor="message" className="message">
          <div>
            <p>Message</p>
            <p>
              <small>Maximum text length is 500 characters</small>
            </p>
          </div>
          <textarea
            id="Message"
            name="Message"
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
            id="radio"
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
                id="AddressLine1"
                name="AddressLine1"
                value={this.state.AddressLine1}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="line-2">
              Address line 2
              <input
                type="text"
                id="AddressLine2"
                name="AddressLine2"
                value={this.state.AddressLine2}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="city">
              City / Town
              <input
                type="text"
                id="CityTown"
                name="CityTown"
                value={this.state.CityTown}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="county">
              County
              <input
                type="text"
                id="StateCounty"
                name="StateCounty"
                value={this.state.StateCounty}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="postcode">
              Postcode
              <input
                type="text"
                id="Postcode"
                name="Postcode"
                value={this.state.Postcode}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="country">
              Country
              <input
                type="text"
                id="Country"
                name="Country"
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
            <div className="failed-submit">Please fill in the required fields highlighted in red</div>
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