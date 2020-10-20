import React, { Component } from "react";
import Validation from "./validation";

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
            },
            loading: false
        };
    }

    render() {
        const handleChange = e => {
            const key = e.target.name;
            const value = e.target.value;
            const { info, message } = this.state;
            this.setState({
                info: {
                    ...info,
                    [key]: value
                },
                message: {
                    ...message
                    // [key]: Validation.formValidate(key, value)
                }
            });
        };

        // const emailValidation = email => {
        //     if (!email) return "メールアドレスを入力してください";

        //     const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        //     if (!regex.test(email))
        //         return "正しい形式でメールアドレスを入力してください";

        //     return "";
        // };

        // const passwordValidation = password => {
        //     if (!password) return "パスワードを入力してください";
        //     if (password.length < 8)
        //         return "パスワードは8文字以上で入力してください";

        //     return "";
        // };

        // const confirmPasswordValidation = confirmPassword => {
        //     const password = document.getElementById("password").value;
        //     console.log(confirmPassword);
        //     console.log(password);
        //     if (confirmPassword !== password) {
        //         return "パスワードが一致していません";
        //     }
        //     return "";
        // };

        // const countValidation = (text, maxLength) => {
        //     if (!text) return "入力してください";
        //     if (text.length >= maxLength)
        //         return maxLength + "文字以内で入力してください";

        //     return "";
        // };

        // const canSubmit = () => {
        //     const { info, message, loading } = this.state;

        //     const validInfo =
        //         Object.values(info).filter(value => {
        //             return value === "";
        //         }).length === 0;
        //     const validMessage =
        //         Object.values(message).filter(value => {
        //             return value !== "";
        //         }).length === 0;
        //     return validInfo && validMessage && !loading;
        // };

        // 連打されるのを防ぐ
        const submit = () => {
            this.setState({ loading: true });
            this.setState({ loading: false });
        };

        const registerUser = () => {
            const url = "http://localhost/api/register";
            const data = {
                name: this.state.info.name,
                email: this.state.info.email,
                password: this.state.info.password,
                password_confirmation: this.state.info.password_confirmation
            };
            axios.post(url, data).then(res => {
                console.log(res);

                alert("会員登録成功");
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
                    新規登録
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">UserName</label>
                    <input
                        type="name"
                        name="name"
                        className="form-control"
                        id="exampleInputName"
                        placeholder="Enter Name"
                        value={info.name}
                        onChange={e => handleChange(e)}
                    />
                    {message.name && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.name}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        // aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={info.email}
                        onChange={e => handleChange(e)}
                    />
                    {message.email && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.email}
                        </p>
                    )}
                    <small id="emailHelp" className="form-text text-muted">
                        公開せませんので安心して入力しやがれ
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={info.password}
                        onChange={e => handleChange(e)}
                    />
                    {message.password && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.password}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="password_confirmation"
                        className="form-control"
                        id="password_confirmation"
                        placeholder="Confirm Password"
                        value={info.password_confirmation}
                        onChange={e => handleChange(e)}
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
            </form>
        );
    }
}
export default SignUpForm;
