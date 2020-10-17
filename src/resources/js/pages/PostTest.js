import React, { Component } from "react";
import axios from "axios";

class PostTest extends Component {

    render() {
        // フォームデータ登録非同期通信
        const postFormData = () => {
            const url = "http://localhost/api/articles/create";
            const data = {
                companyName: "test株式会社",
                term: "test期間",
                task: "ペリカを稼ぐ",
                impressions: "マジクソすぎた",
                user_id: "3"
            };
            axios.post(url, data).then(res => {
                console.log('body:', res.data);
            })
        }

        return(
            <button
                className="btn btn-success"
                style={{ margin: "10px" }}
                onClick={postFormData()}
            >
            投稿する
            </button>
        );
    }
}
export default PostTest;
