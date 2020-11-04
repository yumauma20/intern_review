import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LogoutForm extends Component {
    render() {
        const url = "http://localhost/api/logout";
        axios
            .post(url)
            .then(res => {
                axios.defaults.headers.common["Authorization"] = "";
                console.log(axios.defaults.headers.common["Authorization"]);
                console.log("ログアウト成功");
            })
            .catch(res => {
                console.log(axios.defaults.headers);
                console.log("ログアウト失敗");
            });
        return <Redirect to="/" />;
    }
}

export default LogoutForm;
