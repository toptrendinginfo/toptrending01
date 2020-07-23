import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import Mobile from "./Mobile";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/mobile" component={Mobile} />
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
};
export default App;
