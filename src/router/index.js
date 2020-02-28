import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import NoMatch from "../component/NoMatch";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";

const routes = (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="*" component={NoMatch} />
    </Switch>
    <Footer />
  </Router>
);
export default routes;
