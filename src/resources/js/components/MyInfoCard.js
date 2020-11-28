import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MyInfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articlesSum: "",
            myName: ""
        };
    }

    componentDidMount() {
        // ログインしているユーザの記事の総投稿数を計算しstateにセットする
        const myArticlesUrl = "http://localhost/api/myArticles";
        // headerにトークンを入れてから通信
        const headers = {
            Accept: "application/json",
            Authorization: "Bearer " + this.props.Token
        };
        axios
            .get(myArticlesUrl, { headers: headers })
            .then(res => {
                this.setState({
                    articlesSum: res.data.articles.length
                });
            })
            .catch(() => {
                alert("通信に失敗しました。");
            });

        // ログインしているユーザの名前を取得
        const meUrl = "http://localhost/api/me";
        axios
            .get(meUrl, { headers: headers })
            .then(res => {
                this.setState({
                    myName: res.data.name
                });
            })
            .catch(() => {
                alert("通信に失敗しました。");
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
                            <p>{this.state.myName} </p>
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
