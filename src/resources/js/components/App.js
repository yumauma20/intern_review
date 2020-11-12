import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { HashRouter as Router, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import PostReviewPage from "../pages/PostReviewPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import MyPage from "../pages/MyPage";
import LogoutPage from "../pages/LogoutPage";
import DetailPage from "../pages/DetailPage";
import MyDetailPage from "../pages/MyDetailPage";
import MyEditPage from "../pages/MyEditPage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../modules/store";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/SignUp" component={SignUpPage} />
                    <Route path="/Login" component={LoginPage} />
                    <Route path="/Logout" component={LogoutPage} />
                    <Route path="/Post" component={PostReviewPage} />
                    <Route path="/MyPage" component={MyPage} />
                    <Route path="/Detail/:id" component={DetailPage} />
                    <Route path="/MyDetail/:id" component={MyDetailPage} />
                    <Route path="/MyEdit/:id" component={MyEditPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById("app")
);
