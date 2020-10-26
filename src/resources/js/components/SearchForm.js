import React, { Component } from "react";

class SearchForm extends Component {
    render() {
        return (
            <div>
                <form className="form-inline">
                    <input
                        className="form-control mr-sm-2"
                        id="js-searchArticles"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={this.props.searchArticles}
                        style={{ width: "300px" }}
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                        onClick={this.props.searchArticles}
                    >
                        Search
                    </button>
                </form>
            </div>
        );
    }
}
export default SearchForm;
