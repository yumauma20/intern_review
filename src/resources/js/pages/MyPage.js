import React, { Component } from "react";
import Header from "../components/Header";
import MyInfoCard from "../components/MyInfoCard";
import MyArticleList from "../components/MyArticleList";

class MainPage extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container text-center">
                    <MyInfoCard />
                </div>
                <MyArticleList />
            </>
        );
    }
}

export default MainPage;
