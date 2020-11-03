import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import PostReviewPage from "../pages/PostReviewPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import DetailPage from "../pages/DetailPage";
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={MainPage} />
                <Route path="/SignUp" component={SignUpPage} />
                <Route path="/Login" component={LoginPage} />
                <Route path="/Post" component={PostReviewPage} />
                <Route path="/Detail/:id" component={DetailPage} />
            </Router>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
