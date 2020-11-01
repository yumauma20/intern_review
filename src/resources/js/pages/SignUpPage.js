import React, { Component } from "react";
import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";

class SignUpPage extends Component {
    render() {
        return (
            <>
                <Header />
                <SignUpForm />
            </>
        );
    }
}
export default SignUpPage;
