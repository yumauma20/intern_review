import React, { Component } from "react";
import Header from "../components/Header";
import DetailModal from "../components/DetailModal";

class DetailPage extends Component {
    render() {
        const params = this.props.match;
        const id = parseInt(params.params.id, 10);
        console.log("detailpageのid" + id);

        return (
            <>
                <Header />
                <DetailModal id={id} />
            </>
        );
    }
}
export default DetailPage;
