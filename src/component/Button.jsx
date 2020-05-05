import React, { Component } from "react";
import "../style/Button.css";

class Button extends Component {
  render() {
    return <button><strong>{this.props.buttonTitle}</strong></button>;
  }
}

export default Button;
