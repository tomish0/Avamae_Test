import React, { Component } from "react";
import "../style/AboutUs.css";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div className="about-us-page">
        <h1>About Us</h1>
        <h4>
          Torquent nunc massa ut dis facilisis nibh congue varius at dictumst
        </h4>
        <p>
          Torquent nunc massa ut dis facilisis nibh congue varius at dictumst,
          aliquet montes inceptos facilisi habitasse ultricies mus mollis
          aliquam cubilia neque, feugiat platea ad euismod volutpat mauris
          ultrices laoreet metus. Purus bibendum nostra eget sociis laoreet
          feugiat a neque habitasse, viverra varius placerat montes ad luctus
          mauris lobortis nisl, metus tristique penatibus mollis mi tempus
          fringilla scelerisque. Volutpat auctor dictum eget cum mauris cras
          aptent, pharetra vulputate ornare aliquam proin lacus netus morbi,
          tempus purus scelerisque sociosqu nisi eu.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, in laoreet non
          dui sed libero, ullamcorper congue natoque torquent ultricies mus. Eu
          ut cubilia congue blandit fringilla egestas luctus auctor orci erat,
          donec pretium tortor mattis porta lacus penatibus himenaeos. Massa
          habitasse purus taciti lobortis et in nunc ad mauris phasellus
          eleifend urna, nam laoreet dignissim primis nisl accumsan venenatis
          litora fames tempus libero.
        </p>
        {this.props.length > 0 ? (
          <div className="img-wrapper">
            <img src={`${this.props.carouselData[1].ImageUrl}`} alt="" />
          </div>
        ) : null}
        {/* <div className="img-wrapper">
          <img src={`${this.props.carouselData[1].ImageUrl}`} alt="" />
        </div> */}
        <p>
          Tincidunt montes curae convallis pretium senectus blandit molestie
          metus habitasse urna rutrum laoreet, cubilia lobortis posuere suscipit
          orci est placerat natoque sed suspendisse. Mus ut aliquam vel
          venenatis iaculis pulvinar cum imperdiet aptent varius, in eleifend
          metus suspendisse at nibh ultricies congue quam nisl, elementum nisi
          orci senectus consequat ligula eu hac fermentum. Posuere molestie
          class tellus imperdiet vitae, arcu morbi laoreet quam ridiculus
          suscipit, nulla mollis a nisl.
        </p>
        <h3>
          Felis dictumst neque consequat molestie sociis, est platea faucibus:
        </h3>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit cubilia.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit cubilia.
          </li>
          <li>
            Rutrum lectus ac odio rhoncus nullam, praesent sed conubia euismod.
          </li>
          <li>
            Facilisis nullam cubilia erat, ut semper lacinia, interdum inceptos.
          </li>
        </ul>
        <p>
          Tincidunt montes curae convallis pretium senectus blandit molestie
          metus habitasse urna rutrum laoreet, cubilia lobortis posuere suscipit
          orci est placerat natoque sed suspendisse. Mus ut aliquam vel
          venenatis iaculis pulvinar cum imperdiet aptent varius, in eleifend
          metus suspendisse at nibh ultricies.
        </p>
        <p>
          Tincidunt montes curae convallis pretium senectus blandit molestie
          metus habitasse urna rutrum laoreet, cubilia lobortis posuere suscipit
          orci est placerat natoque sed suspendisse. Mus ut aliquam vel
          venenatis iaculis pulvinar cum imperdiet aptent varius, in eleifend
          metus suspendisse at nibh ultricies congue quam nisl, elementum nisi
          orci senectus consequat ligula eu hac fermentum. Posuere molestie
          class tellus imperdiet vitae, arcu morbi laoreet quam ridiculus
          suscipit, nulla mollis a nisl.
        </p>
      </div>
    );
  }
}

export default AboutUs;
