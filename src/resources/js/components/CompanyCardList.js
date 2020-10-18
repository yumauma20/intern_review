/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import CompanyCard from "./CompanyCard";
import axios from "axios";

class CompanyCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: "2"
        };
    }

    componentDidMount() {
        //  render直後に行いたい処理を書くところ
        console.log("didmount始め");
        const url = "http://localhost/api/articles";
        const queries = { page: this.state.page };
        axios
            .get(url, { params: queries })
            .then(res => {
                this.setState({
                    articles: res.data.articles
                });
            })
            .catch(() => {
                console.log("通信に失敗しました。");
            });
        console.log(this.state);
        console.log("dedmount終わり");
    }

    render() {
        const setPageState = (e, n) => {
            console.log("pagestateを変更するよ");
            // なぜか値がセットされていない
            this.setState({ page: "1" });
            console.log(e);
            console.log(n);
        };
        const ActivePagination = number => {
            const items = [];
            for (let n = 1; n <= number; n++) {
                items.push(
                    <li
                        className="page-item"
                        key={n}
                        onClick={e => setPageState(e, n)}
                    >
                        <a className="page-link" href="">
                            {n}
                        </a>
                    </li>
                );
            }
            return items;
        };
        return (
            <>
                {this.state.articles.map(e => (
                    <CompanyCard
                        key={e.id}
                        id={e.id}
                        company={e.company}
                        term={e.term}
                        task={e.task}
                    />
                ))}
                <nav aria-label="Page navigation example">
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
                </nav>
            </>
        );
    }
}
export default CompanyCardList;
