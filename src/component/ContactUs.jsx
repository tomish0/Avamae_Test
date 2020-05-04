import React, { Component } from "react";
import Button from "./Button.jsx";
import graphic from "../images/ContactUs-graphic.png";
import "../style/ContactUs.css";

class ContactUs extends Component {
  state = {
    isChecked: false,
    nameValue: "",
    emailValue: "",
    phone01Value: "",
    phone02Value: "",
    messageValue: "",
    addressLine1Value: "",
    addressLine2Value: "",
    cityValue: "",
    countyValue: "",
    postcodeValue: "",
    countryValue: "",
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

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FullName: this.state.nameValue,
          EmailAddress: this.state.emailValue,
          PhoneNumber: this.state.phone01Value,
          PhoneNumber2: this.state.phone02Value,
          Message: this.state.messageValue,
          bIncludeAddressDetails: this.state.isChecked,
          AddressLine1: this.state.addressLine1Value,
          AddressLine2: this.state.addressLine2Value,
          CityTown: this.state.cityValue,
          StateCounty: this.state.countyValue,
          Postcode: this.state.postcodeValue,
          Country: this.state.countryValue,
        }),
      }
    )
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
    console.log("submitted");
  };

  render() {
    return (
      <div className="contact-us-page">
        <div className="title-form">
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, in laoreet
            non dui sed libero, ullamcorper congue natoque torquent ultricies
            mus
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="name-email-wrapper">
              <label htmlFor="name" className="name">
                Full Name
                <input
                  type="text"
                  id="nameValue"
                  name="nameValue"
                  value={this.state.nameValue}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="email" className="email">
                Email address
                <input
                  type="email"
                  id="emailValue"
                  name="emailValue"
                  value={this.state.emailValue}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <label htmlFor="phone-01" className="phone-01">
              Phone number 01 <span>- optional</span>
              <input
                type="number"
                id="phone01Value"
                name="phone01Value"
                value={this.state.phone01Value}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="phone" className="phone-02">
              Phone number 02 <span>- optional</span>
              <input
                type="number"
                id="phone02Value"
                name="phone02Value"
                value={this.state.phone02Value}
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
                id="messageValue"
                name="messageValue"
                value={this.state.messageValue}
                onChange={this.handleChange}
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
                    id="addressLine1Value"
                    name="addressLine1Value"
                    value={this.state.addressLine1Value}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="line-2">
                  Address line 1
                  <input
                    type="text"
                    id="addressLine2Value"
                    name="addressLine2Value"
                    value={this.state.addressLine2Value}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="city">
                  City / Town
                  <input
                    type="text"
                    id="cityValue"
                    name="cityValue"
                    value={this.state.cityValue}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="county">
                  County
                  <input
                    type="text"
                    id="countyValue"
                    name="countyValue"
                    value={this.state.countyValue}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="postcode">
                  Postcode
                  <input
                    type="text"
                    id="postcodeValue"
                    name="postcodeValue"
                    value={this.state.postcodeValue}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="country">
                  Country
                  <input
                    type="text"
                    id="countryValue"
                    name="countryValue"
                    value={this.state.countryValue}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            ) : null}
            <input type="submit" value="Submit" className="submit"></input>
          </form>
        </div>
        <img src={graphic} alt="logo" />
      </div>
    );
  }
}

export default ContactUs;
