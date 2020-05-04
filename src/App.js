import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./component/Home.jsx";
import ContactUs from "./component/ContactUs.jsx";
import AboutUs from "./component/AboutUs.jsx";
import Button from "./component/Button.jsx";
import "./style/App.css";
import logo from "../src/images/logo.jpg";

class App extends Component {
  state = {
    carouselData: [],
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
      );
      this.setState({ carouselData: res.data.Details });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="app">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="links">
            <Link to="/" className="link home-link">
              HOME
            </Link>
            <Link to="/About-Us" className="link about-us">
              ABOUT US
            </Link>
            <Link to="/Contact-Us" className="link contact-us">
              CONTACT US
            </Link>
            <Button buttonTitle="Log in"></Button>
          </div>
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home carouselData={this.state.carouselData} />}
          />
          <Route
            exact
            path="/About-Us"
            component={() => <AboutUs carouselData={this.state.carouselData} />}
          />
          <Route exact path="/Contact-Us" component={ContactUs} />
        </Switch>
        <footer></footer>
      </div>
    );
  }
}

export default App;
