import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./component/Home.jsx";
import ContactUs from "./component/ContactUs.jsx";
import AboutUs from "./component/AboutUs.jsx";
import "./style/App.css";
import logo from "../src/images/logo.jpg";

class App extends Component {
  state = {};

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
            <button>Log in</button>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About-Us" component={AboutUs} />
          <Route exact path="/Contact-Us" component={ContactUs} />
        </Switch>
        <footer>
          <div>FOOTER</div>
        </footer>
      </div>
    );
  }
}

export default App;
