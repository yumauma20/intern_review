import React, { Component } from "react";
import CompanyCardList from "./CompanyCardList";
import SearchForm from "./SearchForm";
import Pagination from "../components/Pagination";

class ArticlesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1
        };
    }

    componentDidMount() {
        //   render直後に行いたい処理を書くところ
        const url = "http://localhost/api/articles";
        axios
            .get(url)
            .then(res => {
                this.setState({
                    articles: res.data.articles
                });
            })
            .catch(() => {
                alert("通信に失敗しました。");
            });
    }

    render() {
        const articleDataGet = () => {
            let url = new URL("http://localhost/api/articles");
            const phrase = document.getElementById("js-searchArticles").value;
            // 半角・全角スペースのいずれかを検知する
            const strings = phrase.split(/[ |　]+ */);
            //空文字の削除
            const stringsFilter = strings.filter(function(e) {
                return e !== "";
            });
            if (stringsFilter.length > 0) {
                for (let i = 0; i < stringsFilter.length; i++) {
                    url.searchParams.set(`keyword[${i}]`, strings[i]);
                }
            }

            //指定したページのデータを取得
            url.searchParams.set("page", this.state.page);

            axios
                .get(url.href)
                .then(res => {
                    this.setState({
                        articles: res.data.articles
                    });
                })
                .catch(() => {
                    alert("通信に失敗しました。");
                });
        };

        const getCurrentPageData = e => {
            this.setState(
                {
                    page: e.target.value
                },
                () => {
                    articleDataGet();
                }
            );
        };

        return (
            <>
                <SearchForm searchArticles={articleDataGet} />
                <div className="container text-center">
                    <div className="row">
                        {this.state.articles.length ? (
                            <CompanyCardList articles={this.state.articles} />
                        ) : (
                            <p style={{ fontSize: "1.7em" }}>
                                記事はありません
                            </p>
                        )}
                    </div>
                </div>
                <Pagination getCurrentPageData={getCurrentPageData} />
            </>
        );
    }
}

export default ArticlesList;
