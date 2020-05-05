import React, { Component } from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/Carousel.css";

class Carousel extends Component {
  state = {
    carouselData: this.props.carouselData,
    x: 0,
  };

  slideRight = () => {
    let x = this.state.x;
    
    this.setState({ x: (x -= 100) });
  };

  slideLeft = () => {
    let x = this.state.x;
    if (x !== 0) {
      this.setState({ x: (x += 100) });
    }
  };

  render() {
    return (
      <div className="carousel-container">
        <div className="slider">
          {this.state.carouselData.map((item, index) => {
            return (
              <div
                key={index}
                className="carousel-images"
                style={{
                  transform: `translateX(${this.state.x}%)`,
                  backgroundImage: `linear-gradient(to right, rgba(1, 1, 1, 0.72), rgba(255, 255, 255, 0.01)), url(${item.ImageUrl})`,
                }}
              >
                <div className="carousel-text">
                  <h1>{item.Title}</h1>
                  <h3>{item.Subtitle}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <button className="button-left" onClick={() => this.slideLeft()}>
          <FontAwesomeIcon icon={faCaretLeft} className="icon" />
        </button>
        <button className="button-right" onClick={() => this.slideRight()}>
          <FontAwesomeIcon icon={faCaretRight} className="icon" />
        </button>
        <div className="dot"></div>
      </div>
    );
  }
}

export default Carousel;
