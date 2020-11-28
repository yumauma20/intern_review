import React, { Component } from "react";
import { withRouter } from "react-router";

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            message: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            }
        };
    }

    render() {
        const userValidation = e => {
            const key = e.target.name;
            const value = e.target.value;
            const { info, message } = this.state;

            let mes = "";
            if (!value) mes = "入力してください";
            if (value.length > 255) mes = "255文字以内で入力してください";

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

        const emailValidation = e => {
            const key = e.target.name;
            const value = e.target.value;
            const { info, message } = this.state;

            let mes = "";
            if (!value) mes = "メールアドレスを入力してください";

            const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!regex.test(value))
                mes = "正しい形式でメールアドレスを入力してください";

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

        const passwordValidation = e => {
            const key = e.target.name;
            const value = e.target.value;
            const { info, message } = this.state;

            let mes = "";
            if (value.length < 8)
                mes = "パスワードは8文字以上で入力してください";

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

        const confirmPasswordValidation = e => {
            const key = e.target.name;
            const value = e.target.value;
            const { info, message } = this.state;

            const password = document.getElementById("js-password").value;
            let mes = "";
            if (value !== password) {
                mes = "パスワードが一致していません";
            }

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

        const registerUser = () => {
            const url = "http://localhost/api/register";
            const data = {
                name: this.state.info.name,
                email: this.state.info.email,
                password: this.state.info.password,
                password_confirmation: this.state.info.password_confirmation
            };

            axios
                .post(url, data)
                .then(res => {
                    console.log("会員登録成功");
                })
                .catch(res => {
                    console.log("会員登録失敗");
                });

            this.props.history.push("/Login");
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
                    新規登録
                </div>
                <div className="form-group">
                    <label>UserName</label>
                    <input
                        type="name"
                        name="name"
                        className="form-control"
                        placeholder="Enter Name"
                        value={info.name}
                        onChange={e => userValidation(e)}
                    />
                    {message.name && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.name}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={info.email}
                        onChange={e => emailValidation(e)}
                    />
                    {message.email && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.email}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="js-password"
                        placeholder="Password"
                        value={info.password}
                        onChange={e => passwordValidation(e)}
                    />
                    {message.password && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.password}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        className="form-control"
                        id="password_confirmation"
                        placeholder="Confirm Password"
                        value={info.password_confirmation}
                        onChange={e => confirmPasswordValidation(e)}
                    />
                    {message.password_confirmation && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.password_confirmation}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="btn btn-success"
                    style={{ margin: "10px" }}
                    disabled={!canSubmit()}
                    onClick={registerUser}
                >
                    登録する
                </button>
            </div>
        );
    }
}
export default withRouter(SignUpForm);
