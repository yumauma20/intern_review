/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import MyCompanyCard from "./MyCompanyCard";

class MyCompanyCardList extends Component {
    render() {
        return (
            <>
                {this.props.articles.map(e => (
                    <MyCompanyCard
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

export default MyCompanyCardList;
