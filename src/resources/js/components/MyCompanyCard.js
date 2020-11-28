import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MyCompanyCard extends Component {
    render() {
        const mapNumerToTerm = n => {
            if (n == "1") {
                n = "1日";
            } else if (n == "2") {
                n = "1週間未満";
            } else if (n == "3") {
                n = "1ヶ月未満";
            } else if (n == "4") {
                n = "3ヶ月未満";
            } else if (n == "5") {
                n = "3ヶ月以上";
            }
            return n;
        };
        const omittedContent = string => {
            const MAX_LENGTH = 50;
            if (string.length > MAX_LENGTH) {
                return string.substr(0, MAX_LENGTH) + "...";
            }
            return string;
        };
        const deleteArticle = () => {
            console.log(this.props.id);
            const url = `http://localhost/api/articles/delete/${this.props.id}`;
            // headerにトークンを入れてから通信
            const headers = {
                Accept: "application/json",
                Authorization: "Bearer " + this.props.Token
            };
            axios
                .delete(url, { headers: headers })
                .then(() => {
                    alert("記事を削除しました。");
                    //todo マイページにリダイレクトさせたい
                    location.reload();
                })
                .catch(() => {
                    console.log("記事削除に失敗しました。");
                });
        };
        return (
            <div
                className="card p-2"
                style={{
                    width: "320px",
                    boxShadow: "0 10px 25px 0 rgba(0, 0, 0, .5)",
                    margin: "10px",
                    marginRight: "50px"
                }}
            >
                <div className="card-body">
                    <div className="mb-3 border-bottom h3">
                        {this.props.company}
                    </div>
                    <div className="mb-3 text-muted h6">
                        {mapNumerToTerm(this.props.term)}
                    </div>
                    <p className="card-text" style={{ fontSize: "0.8em" }}>
                        {omittedContent(this.props.task)}
                    </p>
                    <Link
                        to={"/MyDetail/" + this.props.id}
                        style={{ color: "white" }}
                    >
                        <div className="btn btn-outline-success">
                            記事詳細へ
                        </div>
                    </Link>
                    <div
                        className="btn btn-outline-danger"
                        onClick={deleteArticle}
                    >
                        削除
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    Token: state.Token
});

export default connect(mapStateToProps)(MyCompanyCard);
