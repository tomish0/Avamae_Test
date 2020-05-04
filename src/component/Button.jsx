import React, { Component } from "react";
import "../style/Button.css";

class Button extends Component {
  state = {};
  render() {
    return <button>{this.props.buttonTitle}</button>;
  }
}

export default Button;
