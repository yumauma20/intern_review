import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MyInfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articlesSum: ""
        };
    }

    componentDidMount() {
        //   render直後に行いたい処理を書くところ
        const url = "http://localhost/api/myArticles";
        // headerにトークンを入れてから通信
        const headers = {
            Accept: "application/json",
            Authorization: "Bearer " + this.props.Token
        };
        // console.log("MyInfoCardの");
        // console.log(this.props.Token);
        axios
            .get(url, { headers: headers })
            .then(res => {
                console.log(res.data.articles.length);
                this.setState({
                    articlesSum: res.data.articles.length
                });
            })
            .catch(() => {
                console.log("通信に失敗しました。");
            });
    }

    render() {
        return (
            <>
                <div
                    className="container text-center"
                    style={{
                        width: "1200px",
                        height: "250px",
                        padding: "0.5em 1em",
                        margin: "2em 0",
                        color: "#5d627b",
                        background: "white",
                        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.22)",
                        borderRadius: "5px"
                    }}
                >
                    <div style={{ display: "flex", marginTop: "10px" }}>
                        <div style={{ flex: "1" }}>
                            <img
                                src={require("../asset/profileImg.png")}
                                style={{
                                    borderRadius: "50%",
                                    width: "220px",
                                    height: "220px"
                                }}
                            />
                        </div>

                        <div style={{ flex: "1" }}>
                            <p style={{ textDecoration: "underline" }}>氏名</p>
                            <p>おじょぎりだー</p>
                            <p style={{ textDecoration: "underline" }}>
                                総投稿数
                            </p>
                            <p>{this.state.articlesSum}</p>
                            <div className="row">
                                <div className="col-md">
                                    <Link to="/Post">
                                        <button className="btn btn-outline-primary">
                                            レビューを書く
                                        </button>
                                    </Link>
                                    <Link to="/Logout">
                                        <button className="btn btn-outline-danger">
                                            ログアウトする
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a style={{ fontSize: "1.7em" }}>いままでの投稿記事</a>
            </>
        );
    }
}
const mapStateToProps = state => ({
    Token: state.Token
});

export default connect(mapStateToProps)(MyInfoCard);
