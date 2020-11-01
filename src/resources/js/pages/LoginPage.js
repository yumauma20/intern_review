import React, { Component } from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

class LoginPage extends Component {
    render() {
        return (
            <>
                <Header />
                <LoginForm />
            </>
        );
    }
}
export default LoginPage;
