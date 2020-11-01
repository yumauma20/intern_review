import React, { Component } from "react";
import Header from "../components/Header";
import ArticlesList from "../components/ArticlesList";

class MainPage extends Component {
    render() {
        return (
            <>
                <Header />
                <ArticlesList />
            </>
        );
    }
}

export default MainPage;
