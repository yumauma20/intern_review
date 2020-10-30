/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import CompanyCard from "./CompanyCard";
// import { connect } from "react-redux";

class CompanyCardList extends Component {
    render() {
        // console.log(this.props.LoggedIn);
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

// reduxでのログイン保持 #57_loginkeep
// const mapStateToProps = state => ({
//     LoggedIn: state.LoggedIn
// });

// export default connect(mapStateToProps)(CompanyCardList);

export default CompanyCardList;
