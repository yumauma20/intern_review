import React, { Component } from "react";
import { connect } from "react-redux";

// import Validation from "./validation";
// import axios from "axios"; なくてもなぜかいける笑

class MyEditForm extends Component {
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
            loading: false,
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
            console.log("myeditformです");
            const url = `http://localhost/api/articles/edit/${this.props.id}`;
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
                .put(url, data, { headers: headers })
                .then(() => {
                    alert("記事を編集しました。");
                    // todo 編集成功したらマイページにリダイレクトさせたい
                })
                .catch(() => {
                    console.log("記事編集失敗");
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
                    記事編集フォーム
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">企業</label>
                    <input
                        className="form-control"
                        type="text"
                        name="companyName"
                        maxLength="50"
                        value={info.companyName}
                        placeholder={this.state.article.company}
                        onChange={e => countValidation(e)}
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
                        onChange={e => selectValidation(e)}
                    >
                        <option>選択してください</option>
                        <option value="1">1日</option>
                        <option value="2">1週間未満</option>
                        <option value="3">1ヶ月未満</option>
                        <option value="4">3ヶ月未満</option>
                        <option value="5">3ヶ月以上</option>
                    </select>
                    {message.term && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.term}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">業務内容</label>
                    <textarea
                        className="form-control"
                        type="text"
                        name="jobContent"
                        rows=""
                        maxLength="500"
                        value={info.jobContent}
                        placeholder={this.state.article.task}
                        onChange={e => countValidation(e)}
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
                        maxLength="500"
                        value={info.impressions}
                        placeholder={this.state.article.impressions}
                        onChange={e => countValidation(e)}
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
            </div>
        );
    }
}
const mapStateToProps = state => ({
    Token: state.Token
});

export default connect(mapStateToProps)(MyEditForm);
