import React, { Component } from "react";

class SearchForm extends Component {
    render() {
        const searchArticles = () => {
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
            console.log(url.href);

            axios
                .get(url.href)
                .then(res => {
                    console.log(res.data.articles);
                })
                .catch(() => {
                    console.log("通信に失敗しました。");
                });
        };

        return (
            <div>
                <form className="form-inline">
                    <input
                        className="form-control mr-sm-2"
                        id="js-searchArticles"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={searchArticles}
                        style={{ width: "300px" }}
                    />
                    {/* <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                        onClick={searchArticles}
                    >
                        Search
                    </button> */}
                </form>
            </div>
        );
    }
}
export default SearchForm;
