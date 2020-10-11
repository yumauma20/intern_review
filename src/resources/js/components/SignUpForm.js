import React, { Component } from "react";
// import Validation from "../validation";

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                email: "",
                password: "",
                confirmPassword: ""
            },
            message: {
                email: "",
                password: "",
                confirmPassword: ""
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
                    ...message,
                    [key]: Validation.formValidate(key, value)
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
                        name="confirmPassword"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={info.confirmPassword}
                        onChange={e => handleChange(e)}
                    />
                    {message.confirmPassword && (
                        <p style={{ color: "red", fontSize: 8 }}>
                            {message.confirmPassword}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="btn btn-success"
                    style={{ margin: "10px" }}
                    disabled={!canSubmit()}
                    onClick={() => submit()}
                >
                    登録する
                </button>
            </form>
        );
    }
}
export default SignUpForm;
