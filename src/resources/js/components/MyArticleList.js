import React, { Component } from "react";
import MyCompanyCardList from "./MyCompanyCardList";
import { connect } from "react-redux";

class MyArticlesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        //   render直後に行いたい処理を書くところ
        const url = "http://localhost/api/myArticles";
        // headerにトークンを入れてから通信
        const headers = {
            Accept: "application/json",
            Authorization: "Bearer " + this.props.Token
        };
        console.log("myarticleの");
        console.log(this.props.Token);
        axios
            .get(url, { headers: headers })
            .then(res => {
                this.setState({
                    articles: res.data.articles
                });
            })
            .catch(() => {
                console.log("通信に失敗しました。");
            });
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    {this.state.articles.length ? (
                        <MyCompanyCardList articles={this.state.articles} />
                    ) : (
                        <p
                            className="container text-center"
                            style={{ fontSize: "1.7em" }}
                        >
                            記事はありません
                        </p>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Token: state.Token
});

export default connect(mapStateToProps)(MyArticlesList);
