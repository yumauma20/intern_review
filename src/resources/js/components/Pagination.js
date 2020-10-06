import React, { Component } from "react";

class PaginationComponent extends Component {
  render() {
    const ActivePagination = (number) => {
      const items = [];
      for (let n = 1; n <= number; n++) {
        items.push(
          <li className="page-item" key={n}>
            <a className="page-link" href="/">
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
