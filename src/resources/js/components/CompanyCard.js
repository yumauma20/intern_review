import React, { Component } from "react";
import { Link } from "react-router-dom";

class CompanyCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className="card p-2"
        style={{
          width: "320px",
          boxShadow: "0 10px 25px 0 rgba(0, 0, 0, .5)",
          margin: "10px",
          marginRight: "50px",
        }}
      >
        <div className="card-body">
          <div className="mb-3 border-bottom h3">{this.props.company}</div>
          <div className="mb-3 text-muted h6">{this.props.term}</div>
          <p className="card-text" style={{ fontSize: "0.8em" }}>
            {this.props.task}
          </p>
          <Link to={"/detail/" + this.props.id} style={{ color: "white" }}>
            <div className="btn btn-success text-white">記事詳細へ</div>
          </Link>
        </div>
      </div>
    );
  }
}
export default CompanyCard;