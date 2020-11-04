import React, { Component } from "react";
import Header from "../components/Header";
import LogoutForm from "../components/LogoutForm";

class LogoutPage extends Component {
    render() {
        return (
            <>
                <Header />
                <LogoutForm />
            </>
        );
    }
}
export default LogoutPage;
