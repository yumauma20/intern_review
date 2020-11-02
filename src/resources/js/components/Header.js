/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
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
                    <a
                        className="navbar-brand"
                        style={{ color: "white", fontSize: "25px" }}
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
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;
