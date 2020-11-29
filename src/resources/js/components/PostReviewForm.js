import React, { Component } from "react";
import { connect } from "react-redux";

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
            }
        };
    }

    render() {
        const countValidation = e => {
            const key = e.target.name;
            const value = e.target.value;
            const maxLength = e.target.maxLength;

            const { info, message } = this.state;

            let mes = "";
            if (!value) mes = "入力してください";
            if (value.length > maxLength)
                mes = `${maxLength}文字以内で入力してください`;

            this.setState({
                info: {
                    ...info,
                    [key]: value
                },
                message: {
                    ...message,
                    [key]: mes
                }
            });
        };

        const selectValidation = e => {
            const key = e.target.name;
            const value = e.target.value;

            const { info, message } = this.state;

            let mes = "";
            if (value == "選択してください") mes = "選択してください";

            this.setState({
                info: {
                    ...info,
                    [key]: value
                },
                message: {
                    ...message,
                    [key]: mes
                }
            });
        };

        const canSubmit = () => {
            const { info, message } = this.state;

            const validInfo =
                Object.values(info).filter(value => {
                    return value === "";
                }).length === 0;
            const validMessage =
                Object.values(message).filter(value => {
                    return value !== "";
                }).length === 0;
            return validInfo && validMessage;
        };

        // フォームデータ登録非同期通信
        const postFormData = () => {
            const url = "http://localhost/api/articles/create";
            const headers = {
                Accept: "application/json",
                Authorization: "Bearer " + this.props.Token
            };
            const data = {
                companyName: this.state.info.companyName,
                term: this.state.info.term,
                task: this.state.info.jobContent,
                impressions: this.state.info.impressions
            };
            axios
                .post(url, data, { headers: headers })
                .then(() => {
                    alert("記事を投稿しました");
                })
                .catch(() => {
                    alert("記事投稿失敗");
                });
        };

        const { info, message } = this.state;
        return (
            <div
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
                    <label>企業</label>
                    <input
                        className="form-control"
                        type="text"
                        name="companyName"
                        maxLength="50"
                        value={info.companyName}
                        onChange={e => countValidation(e)}
                    />
                    {message.companyName && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.companyName}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label>期間</label>
                    <select
                        className="form-control"
                        name="term"
                        value={info.term}
                        onChange={e => selectValidation(e)}
                    >
                        <option>選択してください</option>
                        <option value="1日">1日</option>
                        <option value="1週間未満">1週間未満</option>
                        <option value="1ヶ月未満">1ヶ月未満</option>
                        <option value="3ヶ月未満">3ヶ月未満</option>
                        <option value="3ヶ月以上">3ヶ月以上</option>
                    </select>
                    {message.term && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.term}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label>業務内容</label>
                    <textarea
                        className="form-control"
                        type="text"
                        name="jobContent"
                        maxLength="500"
                        value={info.jobContent}
                        onChange={e => countValidation(e)}
                    />
                    {message.jobContent && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.jobContent}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label>感想</label>
                    <textarea
                        className="form-control"
                        type="text"
                        name="impressions"
                        maxLength="500"
                        value={info.impressions}
                        onChange={e => countValidation(e)}
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
            </div>
        );
    }
}
const mapStateToProps = state => ({
    Token: state.Token
});

export default connect(mapStateToProps)(PostReviewForm);
