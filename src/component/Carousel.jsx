import React, { Component } from "react";
import "../style/Carousel.css";

const numbersArray = [1, 2, 3];

class Carousel extends Component {
  state = {};

  render() {
    return (
      <div className="carousel">
        {numbersArray.map((item, index) => {
          return (
            <div key={index} className="carousel-images">
              {item}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Carousel;
