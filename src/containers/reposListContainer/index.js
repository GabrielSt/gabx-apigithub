import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ReposList from "../../components/reposList";

import {
  requestRepoList,
  changeActivePage,
  sortRepos
} from "../../actions/repoActions";

class ReposListContainer extends Component {
  componentWillMount() {
    this.props.requestRepoList(this.props.match.params.userName);
  }

  render() {
    return <ReposList {...this.props} />;
  }
}

ReposListContainer.propTypes = {
  requestRepoList: PropTypes.func.isRequired,
  repositories: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  repositories: state.repositories.repoList,
  activePage: state.repositories.activePage,
  sortBy: state.repositories.sortBy
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { requestRepoList, changeActivePage, sortRepos },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposListContainer);
