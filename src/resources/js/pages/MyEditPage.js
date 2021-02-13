import React, { Component } from "react";
import Header from "../components/Header";
import MyEditForm from "../components/MyEditForm";

class MyEditPage extends Component {
    render() {
        const params = this.props.match;
        const id = parseInt(params.params.id, 10);

        return (
            <>
                <Header />
                <MyEditForm id={id} />
            </>
        );
    }
}
export default MyEditPage;
