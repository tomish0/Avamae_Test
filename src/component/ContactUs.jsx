import React, { Component } from "react";
import Form from "./Form.jsx";
import imageContact from "../images/Resources/Img_Contact.png";
import "../style/ContactUs.css";

class ContactUs extends Component {
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
          <Form />
        </div>
        <div className="contact-img-wrapper">
          <img src={imageContact} alt="logo" />
        </div>
      </div>
    );
  }
}

export default ContactUs;
