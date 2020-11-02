import React, { Component } from "react";
import { Link } from "react-router-dom";

class DetailModal extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         //  idで検索apiを作成して1件だけ取得して表示したい
    //         article: []
    //     };
    // }

    // componentDidMount() {
    //     //   render直後に行いたい処理を書くところ
    //     const url = `http://localhost/api/articles/detail/${this.props.id}`;
    //     axios
    //         .get(url)
    //         .then(res => {
    //             this.setState({
    //                 article: res.data.article[0]
    //             });
    //         })
    //         .catch(() => {
    //             console.log("通信に失敗しました。");
    //         });
    // }

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
                            <p>13コ</p>
                            <div className="row">
                                <div className="col-md">
                                    <button className="btn btn-outline-primary">
                                        記事を投稿する
                                    </button>
                                    <button className="btn btn-outline-danger">
                                        ログアウトする
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default DetailModal;
