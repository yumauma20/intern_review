import React, { Component } from "react";
import { Link } from "react-router-dom";

class DetailModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //  idで検索apiを作成して1件だけ取得して表示したい
            isLoaded: false,
            reviewData: []
        };
    }

    render() {
        console.log("detalmodelのが受け取ったid" + this.props.id);
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
                            {this.state.reviewData.company}
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
                        <p>{this.state.reviewData.term}</p>
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
                        <p>{this.state.reviewData.task}</p>
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
                        <p>{this.state.reviewData.impression}</p>
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
