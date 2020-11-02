import React, { Component } from "react";
import Header from "../components/Header";
import MyInfoCard from "../components/MyInfoCard";

class MainPage extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container text-center">
                    <MyInfoCard />
                </div>
            </>
        );
    }
}

export default MainPage;
