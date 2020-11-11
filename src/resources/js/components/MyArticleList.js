import React, { Component } from "react";
import MyCompanyCardList from "./MyCompanyCardList";
import { connect } from "react-redux";

class MyArticlesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [
                // {
                //     id: 35,
                //     company: "作った1",
                //     term: "作った1",
                //     task: "作った1",
                //     impressions: "作った1",
                //     name: "40"
                // },
                // {
                //     id: 36,
                //     company: "作った2",
                //     term: "作った2",
                //     task: "作った2",
                //     impressions: "作った2",
                //     name: "40"
                // },
                // {
                //     id: 37,
                //     company: "作った3",
                //     term: "作った3",
                //     task: "作った3",
                //     impressions: "作った3",
                //     name: "40"
                // },
                // {
                //     id: 38,
                //     company: "作った4",
                //     term: "作った4",
                //     task: "作った4",
                //     impressions: "作った4",
                //     name: "40"
                // },
                // {
                //     id: 39,
                //     company: "作った5",
                //     term: "作った5",
                //     task: "作った5",
                //     impressions: "作った5",
                //     name: "40"
                // }
            ]
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
                    <MyCompanyCardList articles={this.state.articles} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Token: state.Token
});

export default connect(mapStateToProps)(MyArticlesList);
