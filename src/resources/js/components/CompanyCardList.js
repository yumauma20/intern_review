/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import CompanyCard from "./CompanyCard";

class CompanyCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],

            // 仮データ
            // reviewData: [
                // {
                    // id: "1",
                    // company: "Hamee",
                    // term: "1週間",
                    // task:
                        // "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風はああああああああああああああaaaaaaaaaaaaa"
                // },
                // {
                    // id: "2",
                    // company: "Yahoo!",
                    // term: "3週間",
                    // task:
                        // "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風はbbbbbbbbbbbbbbbbbbb"
                // },
                // {
                    // id: "3",
                    // company: "Google",
                    // term: "1ヶ月",
                    // task:
                        // "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は..."
                // },
                // {
                    // id: "4",
                    // company: "Hamee",
                    // term: "1週間",
                    // task:
                        // "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は..."
                // },
                // {
                    // id: "5",
                    // company: "Yahoo!",
                    // term: "3週間",
                    // task:
                        // "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は..."
                // },
                // {
                    // id: "6",
                    // company: "Google",
                    // term: "1ヶ月",
                    // task:
                        // "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は..."
                // }
            // ]
        };
    }

    componentDidMount() {
    //   render直後に行いたい処理を書くところ
      const url = "http://localhost/api/articles";
      axios.get(url).then((res) => {
          console.log(res.data.articles);
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
