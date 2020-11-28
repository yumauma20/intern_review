import React, { Component } from "react";
import { Link } from "react-router-dom";

class DetailModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //  idで検索apiを作成して1件だけ取得して表示したい
            article: []
        };
    }

    componentDidMount() {
        //   render直後に行いたい処理を書くところ
        const url = `http://localhost/api/articles/detail/${this.props.id}`;
        axios
            .get(url)
            .then(res => {
                this.setState({
                    article: res.data.article[0]
                });
            })
            .catch(() => {
                console.log("通信に失敗しました。");
            });
    }

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
        return (
            <>
                <div
                    className=" bg-white border rounded container mt-3"
                    style={{
                        width: "600px",
                        boxShadow: "0 10px 25px 0 rgba(0, 0, 0, .5)"
                    }}
                >
                    <div style={{ textAlign: "center", padding: "15px" }}>
                        <p
                            style={{
                                textDecoration: "underline",
                                fontSize: "25px"
                            }}
                        >
                            会社名
                        </p>
                        <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                            {this.state.article.company}
                        </p>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <p
                            style={{
                                textDecoration: "underline",
                                fontSize: "25px"
                            }}
                        >
                            期間
                        </p>
                        <p>{mapNumerToTerm(this.state.article.term)}</p>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <p
                            style={{
                                textDecoration: "underline",
                                fontSize: "25px"
                            }}
                        >
                            業務内容
                        </p>
                        <p>{this.state.article.task}</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <p
                            style={{
                                textDecoration: "underline",
                                fontSize: "25px"
                            }}
                        >
                            感想
                        </p>
                        <p>{this.state.article.impressions}</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <p
                            style={{
                                textDecoration: "underline",
                                fontSize: "25px"
                            }}
                        >
                            投稿者
                        </p>
                        <p>{this.state.article.name}</p>
                    </div>

                    <Link to="/" style={{ color: "white" }}>
                        <div
                            className="btn btn-success text-white"
                            style={{ margin: "10px" }}
                        >
                            一覧に戻る
                        </div>
                    </Link>
                </div>
            </>
        );
    }
}
export default DetailModal;
