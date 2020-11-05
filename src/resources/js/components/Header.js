/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
    render() {
        console.log(this.props.LoggedIn);
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav4"
                        aria-controls="navbarNav4"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <img
                        src={require("../asset/headericon.png")}
                        style={{
                            // borderRadius: "50%",
                            width: "50px",
                            height: "40px",
                            marginRight: "10px"
                        }}
                    />
                    <a
                        className="navbar-brand"
                        style={{
                            color: "white",
                            fontSize: "25px",
                            fontFamily: "cursive"
                        }}
                    >
                        Intern Reviews
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item nav-link">
                                <Link to="/">投稿一覧</Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link to="/Post">レビューを書く</Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link to="/SignUp">新規登録</Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link to="/Login">ログイン</Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link to="/MyPage">マイページ</Link>
                            </li>
                            {(() => {
                                if (this.props.LoggedIn) {
                                    return (
                                        <>
                                            <li className="nav-item nav-link">
                                                <Link to="/">投稿一覧</Link>
                                            </li>
                                            <li className="nav-item nav-link">
                                                <Link to="/Post">
                                                    レビューを書く
                                                </Link>
                                            </li>
                                            <li className="nav-item nav-link">
                                                <Link to="/Logout">
                                                    ログアウト
                                                </Link>
                                            </li>
                                            <li className="nav-item nav-link">
                                                <Link to="/MyPage">
                                                    マイページ
                                                </Link>
                                            </li>
                                        </>
                                    );
                                } else {
                                    return (
                                        <>
                                            <li className="nav-item nav-link">
                                                <Link to="/">投稿一覧</Link>
                                            </li>
                                            <li className="nav-item nav-link">
                                                <Link to="/SignUp">
                                                    新規登録
                                                </Link>
                                            </li>
                                            <li className="nav-item nav-link">
                                                <Link to="/Login">
                                                    ログイン
                                                </Link>
                                            </li>
                                            {/* ログインしていないときはマイページへのリンクを表示していません */}
                                        </>
                                    );
                                }
                            })()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    LoggedIn: state.LoggedIn
});

export default connect(mapStateToProps)(Header);
