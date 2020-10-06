import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import PostReviewPage from "../pages/PostReviewPage";
import SignUpPage from "../pages/SignUpPage";
import DetailPage from "../pages/DetailPage";


// import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route path="/SignUp" component={SignUpPage} />
        <Route path="/Post" component={PostReviewPage} />
        <Route path="/Detail/:id" component={DetailPage} />
      </Router>
    );
  }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}