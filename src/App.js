import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import routes from './routes';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import NotFound from "./404";
import Home from "./home";
import DrumKit from "./DrumKit";
import JSCssClock from "./JSCssClock";
import CssVariables from "./CSSVariables";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/durmkit">durm kit</Link>
            </li>
            <li>
              <Link to="/js-css-clock">js css clock</Link>
            </li>
            <li>
              <Link to="/css-variables">css variables</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/durmkit" component={DrumKit}></Route>
            <Route path="/js-css-clock" component={JSCssClock}></Route>
            <Route path="/css-variables" component={CssVariables}></Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
