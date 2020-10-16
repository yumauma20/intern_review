/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import CompanyCard from "./CompanyCard";

class CompanyCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
    //   render直後に行いたい処理を書くところ
        const url = "http://localhost/api/articles";
        axios.get(url).then((res) => {
        this.setState({
            articles: res.data.articles
        });
        },).catch(() => {
            console.log('通信に失敗しました。')
        });
    }

    render() {
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
            </>
        );
    }
}
export default CompanyCardList;
