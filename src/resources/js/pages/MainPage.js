import React, { Component } from "react";
import Header from "../components/Header";
import CompanyCardList from "../components/CompanyCardList";
// import Pagination from "../components/Pagination";

class MainPage extends Component {
    render() {
        // const setPageState = (e, n) => {
        //     console.log("pagestateを変更するよ");
        //     this.setState({ page: n, isClicked: true });
        //     console.log(e);
        //     console.log(n);
        // };
        // const ActivePagination = number => {
        //     const items = [];
        //     for (let n = 1; n <= number; n++) {
        //         items.push(
        //             <li
        //                 className="page-item"
        //                 key={n}
        //                 onClick={e => setPageState(e, n)}
        //             >
        //                 <a className="page-link" href="">
        //                     {n}
        //                 </a>
        //             </li>
        //         );
        //     }
        //     return items;
        // };
        // if (this.state.isClicked) {
        //     console.log("isClickedがtrueダオ");
        //     console.log(this.state.page);
        //     console.log(this.state.isClicked);
        //     const url = "http://localhost/api/articles/";
        //     axios
        //         .get(url)
        //         .then(res => {
        //             this.setState({
        //                 article: res.data.article
        //             });
        //         })
        //         .catch(() => {
        //             console.log("通信に失敗しました。");
        //         });
        //     // this.setState({ isClicked: false });
        // } else {
        //     console.log("isClickedがfalseダオ");
        // }
        return (
            <>
                <Header />
                <div className="container text-center">
                    <div className="row">
                        <CompanyCardList />
                    </div>
                </div>
                {/* <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="/">
                                Previous
                            </a>
                        </li>
                        {ActivePagination(5)}
                        <li className="page-item">
                            <a className="page-link" href="/">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav> */}
            </>
        );
    }
}
export default MainPage;
