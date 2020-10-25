/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import CompanyCard from "./CompanyCard";

class CompanyCardList extends Component {
    render() {
        return (
            <>
                {this.props.articles.map(e => (
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
