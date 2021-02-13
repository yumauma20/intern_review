import React, { Component } from "react";
import Header from "../components/Header";

class NotFoundPage extends Component {
    render() {
        return (
            <>
                <Header />
                <img
                    src={require("../asset/404notfound.png")}
                    style={{
                        width: "100%",
                        minHeight: "100vh",
                        height: "60vh",
                        overflow: "hidden"
                    }}
                />
            </>
        );
    }
}
export default NotFoundPage;
