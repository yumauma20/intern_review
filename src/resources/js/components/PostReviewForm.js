import React, { Component } from "react";

// import Validation from "./validation";
// import axios from "axios"; なくてもなぜかいける笑

class PostReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                companyName: "",
                term: "",
                jobContent: "",
                impressions: ""
            },
            message: {
                companyName: "",
                term: "",
                jobContent: "",
                impressions: ""
            },
            loading: false
        };
    }

    render() {
        const handleChange = e => {
            const key = e.target.name;
            const value = e.target.value;
            // const maxLength = e.target.maxLength;
            const { info, message } = this.state;

            this.setState({
                info: {
                    ...info,
                    [key]: value
                },
                message: {
                    ...message
                    // [key]: Validation.formValidate(key, value, maxLength)
                }
            });
            // console.log("handleChangeの" + this.state.info);
        };

        const canSubmit = () => {
            const { info, message, loading } = this.state;

            const validInfo =
                Object.values(info).filter(value => {
                    return value === "";
                }).length === 0;
            const validMessage =
                Object.values(message).filter(value => {
                    return value !== "";
                }).length === 0;
            return validInfo && validMessage && !loading;
        };

        // 連打されるのを防ぐ
        const submit = () => {
            this.setState({ loading: true });
            this.setState({ loading: false });
        };

        // フォームデータ登録非同期通信
        const postFormData = () => {
            console.log("postFormDataです");
            const url = "http://localhost/api/articles/create";
            const data = {
                companyName: this.state.info.companyName,
                term: this.state.info.term,
                task: this.state.info.jobContent,
                impressions: this.state.info.impressions
            };
            axios.post(url, data).then(res => {
                alert("記事の投稿に成功しました!!!!!!");
            });
        };

        const { info, message } = this.state;

        return (
            <form
                className="bg-white border rounded container mt-4"
                style={{
                    width: "600px",
                    boxShadow: "0 10px 25px 0 rgba(0, 0, 0, .5)"
                }}
            >
                <div
                    className="font-weight-bold h3 mb-4"
                    style={{ margin: "10px" }}
                >
                    記事投稿フォーム
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">企業</label>
                    <input
                        className="form-control"
                        type="text"
                        name="companyName"
                        maxLength="50"
                        value={info.companyName}
                        onChange={e => handleChange(e)}
                    />
                    {message.companyName && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.companyName}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">期間</label>
                    <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        name="term"
                        value={info.term}
                        onChange={e => handleChange(e)}
                    >
                        <option>選択してください</option>
                        <option value="1">1日</option>
                        <option value="2">1週間未満</option>
                        <option value="3">1ヶ月未満</option>
                        <option value="4">3ヶ月未満</option>
                        <option value="5">3ヶ月以上</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">業務内容</label>
                    <textarea
                        className="form-control"
                        type="text"
                        name="jobContent"
                        rows=""
                        maxLength="30"
                        value={info.jobContent}
                        onChange={e => handleChange(e)}
                    />
                    {message.jobContent && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.jobContent}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">感想</label>
                    <textarea
                        className="form-control"
                        type="text"
                        name="impressions"
                        maxLength="50"
                        value={info.impressions}
                        onChange={e => handleChange(e)}
                        id="exampleFormControlTextarea1"
                        rows="3"
                    />
                    {message.impressions && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.impressions}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="btn btn-success"
                    style={{ margin: "10px" }}
                    disabled={!canSubmit()}
                    onClick={postFormData}
                >
                    投稿する
                </button>
            </form>
        );
    }
}
export default PostReviewForm;
