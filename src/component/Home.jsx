import React, { Component } from "react";
// import axios from "axios";
import Carousel from "./Carousel.jsx";
import Button from "./Button.jsx";
import "../style/Home.css";

class Home extends Component {
  state = {
    // carouselData: [],
  };

  // async componentDidMount() {
  //   try {
  //     const res = await axios.get(
  //       "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
  //     );
  //     this.setState({ carouselData: res.data.Details });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  render() {
    return (
      <div className="home">
        <Carousel carouselData={this.props.carouselData} />
        <section className="section-2">
          <div className="content">
            <h3>Primis lobortis sollicitudin dictumst, molestie vivamus</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, hendrerit
              elementum habitant sociosqu convallis non. Vulputate eu viverra
              placerat velit auctor sodales justo vestibulum convallis dui eget
              quis nascetur mauris pharetra augue, est purus malesuada ligula
              nisi sociosqu cursus himenaeos iaculis curabitur ad magna leo
              vehicula.
            </p>
            <ul>
              <li>Risus turpis sagittis suscipit libero, quis tempor.</li>
              <li>Risus turpis sagittis suscipit libero, quis tempor.</li>
              <li>Risus turpis sagittis suscipit libero, quis tempor.</li>
              <li>Risus turpis sagittis suscipit libero, quis tempor.</li>
            </ul>
            <Button buttonTitle="Learn more"></Button>
          </div>
          {this.props.carouselData.length > 0 ? (
            <div className="img-wrapper">
              <img src={this.props.carouselData[1].ImageUrl} alt='office'/>
            </div>
          ) : null}
        </section>
        <section className="section-3">
          <div className="content">
            <h3>Laoreet sodales tristique nisi cum, suspendisse vehicula eu</h3>
            <p>
              Ornare accumsan porttitor feugiat hendrerit tempor platea
              imperdiet lacus venenatis etiam, taciti rutrum consequat quam
              sapien pellentesque duis quis aptent cum proin, suscipit est
              integer porta ut mi maecenas penatibus auctor. Proin aenean
              cubilia platea ac orci enim eu leo ridiculus, pharetra gravida
              risus nisl fringilla ante donec litora, massa tempor hendrerit
              neque imperdiet rutrum lobortis nisi.
            </p>
            <Button buttonTitle="Log in"></Button>
          </div>
          {this.props.carouselData.length > 0 ? (
            <div
              className="img-wrapper"
              style={{
                backgroundImage: `url(${this.props.carouselData[2].ImageUrl})`,
              }}
            ></div>
          ) : null}
        </section>
        <section className="section-4">
          <h3>Litora euismod fermentum curabitur mattis, ut sapien</h3>
          <h4>Inceptos rutrum non pulvinar vehicula, semper aptent</h4>
          <div className="paragraphs">
            <p>
              Mattis eu luctus eleifend himenaeos maecenas dictum risus
              suspendisse natoque, justo euismod condimentum metus scelerisque
              hac etiam viverra, cubilia consequat auctor purus nec nulla non
              dapibus. Himenaeos porttitor lacus odio placerat dictum arcu eget
              convallis magna libero
            </p>
            <p>
              duis volutpat nulla, rhoncus vivamus orci suspendisse taciti
              nostra consequat aliquet egestas tempor dignissim. Cum ornare
              himenaeos aliquet velit nisl varius sagittis nascetur, nunc per
              bibendum tellus viverra taciti vivamus, risus ultrices lobortis
              congue at aptent proin.
            </p>
            <p>
              Porta maecenas egestas eget per luctus blandit a, penatibus class
              sapien nunc cursus hendrerit lacus vulputate, sodales metus tellus
              ante litora facilisis. Integer id curabitur dui magnis nullam,
              etiam mauris senectus laoreet, habitant eros nostra tortor.
            </p>
          </div>
          <Button buttonTitle="Contact us"></Button>
        </section>
      </div>
    );
  }
}

export default Home;
