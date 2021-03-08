import React, { Component } from "react";

class PaginationComponent extends Component {
    render() {
        const ActivePagination = number => {
            let paginationList = document.getElementsByClassName(
                "js-pagination"
            );
            for (let i = 0; i < paginationList.length; i++) {
                actionPagination(paginationList[i], i);
            }

            function actionPagination(element, id) {
                element.addEventListener("click", function() {
                    this.classList.toggle("active");

                    for (let i = 0; i < paginationList.length; i++) {
                        if (id !== i) {
                            if (
                                paginationList[i].classList.contains("active")
                            ) {
                                paginationList[i].classList.remove("active");
                            }
                        }
                    }
                });
            }

            const items = [];
            for (let n = 1; n <= number; n++) {
                items.push(
                    <li className="page-item js-pagination" key={n}>
                        <a
                            className="page-link"
                            value={n}
                            onClick={e => this.props.getCurrentPageData({ n })}
                        >
                            {n}
                        </a>
                    </li>
                );
            }
            return items;
        };

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="/">
                            Previous
                        </a>
                    </li>
                    {ActivePagination(5)}
                    <li className="page-item">
                        <a className="page-link" href="/">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default PaginationComponent;
