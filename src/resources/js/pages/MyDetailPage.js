import React, { Component } from "react";
import Header from "../components/Header";
import MyDetailModal from "../components/MyDetailModal";

class MyDetailPage extends Component {
    render() {
        const params = this.props.match;
        const id = parseInt(params.params.id, 10);
        console.log("mydetailpageのid" + id);

        return (
            <>
                <Header />
                <MyDetailModal id={id} />
            </>
        );
    }
}
export default MyDetailPage;
