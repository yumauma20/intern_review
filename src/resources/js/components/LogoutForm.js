import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction } from "../logoutAction";

class LogoutForm extends Component {
    render() {
        const url = "http://localhost/api/logout";
        axios
            .post(url)
            .then(res => {
                axios.defaults.headers.common["Authorization"] = "";
                console.log("ログアウト成功");
                this.props.logoutAction();
            })
            .catch(res => {
                //ログアウト正常にできるまでの強制ログアウト
                this.props.logoutAction();
                console.log("ログアウト失敗");
            });
        return <Redirect to="/" />;
    }
}

const mapStateToProps = state => ({
    LoggedIn: state.LoggedIn
});

const mapDispatchToProps = { logoutAction };

export default connect(mapStateToProps, mapDispatchToProps)(LogoutForm);

// export default LogoutForm;
