import React, { Component } from "react";
import Header from "../components/Header";
import CompanyCardList from "../components/CompanyCardList";
import Pagination from "../components/Pagination";

class MainPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container text-center">
          <div className="row">
            <CompanyCardList />
          </div>
        </div>
        <Pagination />
      </>
    );
  }
}
export default MainPage;