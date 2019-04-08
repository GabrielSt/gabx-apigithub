import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

import "./styles.css";

class ReposList extends Component {
  constructor(props) {
    super(props);

    this.handlePageClick = this.handlePageClick.bind(this);
    this.sortByField = this.sortByField.bind(this);
  }

  handlePageClick(eventKey) {
    this.props.changeActivePage(eventKey);
  }

  sortByField(field) {
    this.props.sortRepos(field);
    console.log(field + " teste");
  }

  renderRows(repositories) {
    return repositories.map(rep => (
      <tr key={rep.id}>
        <td>{rep.name}</td>
        <td>{rep.description}</td>
        <td>{rep.stargazers_count}</td>
        <td>
          <Link to={`/repoDetail/${rep.owner.login}/${rep.name}`}>
            <i className="fa fa-info-circle icon" />
          </Link>
        </td>
      </tr>
    ));
  }

  render() {
    const { repositories, activePage } = this.props;
    const start = (activePage - 1) * 10;
    const reposToShow = repositories.slice(start, start + 10);
    return (
      <div className="listBox">
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => this.sortByField("name")} className="sortable">
                Name
                <i className="icon fa fa-sort sortable-icon" />
              </th>
              <th>Description</th>
              <th
                onClick={() => this.sortByField("stars")}
                className="sortable"
              >
                Stars
                <i className="icon fa fa-sort sortable-icon" />
              </th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>{this.renderRows(reposToShow)}</tbody>
        </table>
        <div className="">
          {
            <Pagination
              activePage={activePage}
              itemsCountPerPage={10}
              totalItemsCount={repositories.length}
              pageRangeDisplayed={5}
              onChange={this.handlePageClick}
            />
          }
        </div>
      </div>
    );
  }
}

ReposList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
  activePage: PropTypes.number.isRequired
};

export default ReposList;
