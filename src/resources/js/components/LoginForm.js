import React, { Component } from "react";

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                email: "",
                password: ""
            },
            message: {
                email: "",
                password: ""
            },
            loading: false
        };
    }

    render() {
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

        /*    const registerUser = () => {
            const url = "http://localhost/api/register";
            const data = {
                name: this.state.info.name,
                email: this.state.info.email,
                password: this.state.info.password,
                password_confirmation: this.state.info.password_confirmation
            };
            axios.post(url, data).then(res => {
                alert("会員登録成功");
            });
        };
 */
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
                    ログインページ
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
                        onChange={e => emailValidation(e)}
                    />
                    {message.email && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.email}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
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
                <button
                    type="submit"
                    className="btn btn-success"
                    style={{ margin: "10px" }}
                    disabled={!canSubmit()}
                    // onClick={registerUser}
                >
                    登録する
                </button>
            </form>
        );
    }
}
export default SignUpForm;
