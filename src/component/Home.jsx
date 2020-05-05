import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import ContactUs from "./ContactUs.jsx";
import AboutUs from "./AboutUs.jsx";
import Carousel from "./Carousel.jsx";
import Button from "./Button.jsx";
import officeImg1 from "../images/Resources/Office-1.jpg";
import womanImg2 from "../images/Resources/Other-woman.jpg";
import "../style/Home.css";

class Home extends Component {
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
            <Link to="/About-Us">
              <Button buttonTitle="Learn more"></Button>
            </Link>
          </div>
          <div className="img-wrapper">
            <img src={officeImg1} alt="office" />
          </div>
        </section>
        <section className="section-3">
          <div className="content-positioner">
            <div className="content">
              <h3>
                Laoreet sodales tristique nisi cum, suspendisse vehicula eu
              </h3>
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
            <div></div>
          </div>
          <div
            className="img-wrapper"
            style={{
              backgroundImage: `url(${womanImg2})`,
            }}
          ></div>
        </section>
        <section className="section-4">
          <h3>Litora euismod fermentum curabitur mattis, ut sapien</h3>
          <h4>Inceptos rutrum non pulvinar vehicula, semper aptent</h4>
          <article className="paragraphs">
            <p><strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vel lectus nisl. Vivamus ac diam id nisi congue pellentesque ac
              non quam. Donec bibendum non lorem vel dignissim. Curabitur ac
              nulla ac purus varius molestie. Pellentesque sollicitudin arcu at
              dolor mattis sollicitudin. Aenean consequat ante tellus, ut
              interdum erat dignissim at. Morbi a blandit urna. Maecenas feugiat
              urna a sapien scelerisque, vitae posuere leo malesuada. In vitae
              nulla blandit, fermentum magna id, lacinia ex. Vestibulum augue
              elit, porta ac eleifend at, aliquet eget turpis. In rhoncus mauris
              dolor, eu facilisis nisi dictum.</strong> <br/><br/>
            </p>
           <p>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Pellentesque quis
              ex viverra, porttitor sem eget, volutpat magna. Integer varius
              fringilla maximus. Praesent sit amet ex quis ante hendrerit
              vulputate ut in turpis. Integer sit amet convallis metus. Mauris
              sed porta ipsum, vitae tempor metus. Sed at neque sed arcu luctus
              bibendum. Nulla egestas tristique erat, eu cursus orci viverra
              quis. Ut id magna auctor, malesuada magna id, sagittis est. Nunc
              ut lorem consequat, laoreet ipsum sodales, dapibus nulla. Donec
              laoreet mi vitae mi ornare, quis imperdiet sapien venenatis.
              Aliquam vel semper leo. Morbi vestibulum quam feugiat orci
              fermentum interdum. Maecenas eget massa scelerisque, ornare nisl
              ornare, cursus leo. Nulla quis nisi massa.
              </p>
              
              <p>
              <br/>
              Proin viverra justo et nulla gravida, a interdum sem tempor. Ut
              ornare laoreet vestibulum. Suspendisse lobortis elit pulvinar,
              placerat urna at, pulvinar tellus. Suspendisse aliquam a enim nec
              varius. In tincidunt nulla elementum turpis semper condimentum.
              Donec sed tristique quam, vitae convallis elit. Nullam tristique
              ante eget nunc aliquam rutrum. Integer molestie, ante vel
              ullamcorper cursus, turpis mi sollicitudin nulla, blandit tempor
              enim ante eu erat. Integer mattis maximus dui, id auctor eros
              sagittis eu. Aliquam ultricies dictum enim malesuada ullamcorper.
              Quisque condimentum interdum tristique. Pellentesque efficitur
              neque ligula, in tincidunt risus condimentum ut. Quisque a diam
              tempor, molestie mauris ut, blandit urna. Maecenas vel nibh id leo
              sollicitudin euismod et sed velit. Curabitur mollis ipsum in porta
              faucibus. Vivamus maximus sem ut imperdiet hendrerit.
            </p>
          </article>
          <Link to="/Contact-Us">
            <Button buttonTitle="Contact us"></Button>
          </Link>
        </section>
        <Switch>
          <Route
            exact
            path="/About-Us"
            component={() => <AboutUs carouselData={this.state.carouselData} />}
          />
          <Route exact path="/Contact-Us" component={ContactUs} />
        </Switch>
      </div>
    );
  }
}

export default Home;
