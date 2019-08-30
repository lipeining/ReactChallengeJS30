import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import routes from './routes';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NotFound from "./404";
import Home from "./home";
import DrumKit from "./DrumKit";
import JSCssClock from "./JSCssClock";
import CssVariables from "./CSSVariables";
import TypeAhead from "./TypeAhead";
import * as R from "ramda";

class App extends Component {
  render() {
    const routes = [
      { to: "/", name: "Home", component: Home, exact: true },
      { to: "/durmkit", name: "durm kit", component: DrumKit, exact: false },
      {
        to: "/js-css-clock",
        name: "js css clock",
        component: JSCssClock,
        exact: false
      },
      {
        to: "/css-variables",
        name: "css variables",
        component: CssVariables,
        exact: false
      },
      {
        to: "/type-ahead",
        name: "type ahead",
        component: TypeAhead,
        exact: false
      }
    ];
    const genLink = route => {
      return (
        <li key={route.name}>
          <Link to={route.to}>{route.name}</Link>
        </li>
      );
    };
    const genRoute = route => {
      // if (route.to === "/") {
      //   return (
      //     <Route path={route.to} exact component={route.component}></Route>
      //   );
      // }
      return (
        <Route
          key={route.name}
          path={route.to}
          exact={route.exact}
          component={route.component}
        ></Route>
      );
    };
    return (
      <Router>
        <div>
          <ul>{R.map(genLink)(routes)}</ul>
          <Switch>
            {R.map(genRoute)(routes)}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
