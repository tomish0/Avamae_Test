import React, { Component } from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/Carousel.css";

class Carousel extends Component {
  state = {
    carouselData: this.props.carouselData,
    x: 0,
    direction: 0,
  };

  // componentDidUpdate = () => {
  //   console.log("called");

  //   const slider = document.querySelector(".slider");
  //   let direction = this.state.direction;
  //   let result =
  //     direction === 0
  //       ? null
  //       : direction === 1
  //       ? slider.prepend(slider.lastElementChild)
  //       : slider.appendChild(slider.firstElementChild);
  //   if (result === null) {
  //     return null;
  //   } else {
  //     slider.style.transition = "none";
  //     slider.style.transform = "translate(0)";
  //     setTimeout(() => {
  //       slider.style.transition = "all 0.5s";
  //     });
  //   }
  // };

  slideRight = () => {
    let x = this.state.x;
    this.setState({ x: (x -= 33.33), direction: -1 });
    const slider = document.querySelector(".slider");
    setTimeout(() => {
      console.log(this.state.carouselData);
      
      this.state.carouselData.push(this.state.carouselData.shift())
      // slider.appendChild(slider.firstElementChild);
      slider.style.transiton = "none";
      slider.style.transform = "translate(0)";
      setTimeout(() => {
        slider.style.transiton = "all 1s";
      });
    }, 1100);
  };

  slideLeft = () => {
    let x = this.state.x;
    this.setState({ x: (x += 33.33), direction: 1 });
  };

  render() {
    console.log(this.state.direction);

    return (
      <div className="carousel-container">
        <div
          className="slider"
          style={{ transform: `translateX(${this.state.x}%)` }}
        >
          {this.state.carouselData.map((item, index) => {
            return (
              <div
                key={index}
                className="carousel-images"
                style={{
                  // transform: `translateX(${this.state.x}%)`,
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
