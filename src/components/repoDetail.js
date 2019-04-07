import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestRepo } from "../actions/repoActions";

// import { Container } from './styles';

class RepoDetail extends Component {
  componentWillMount() {
    this.props.requestRepo(
      this.props.match.params.userName,
      this.props.match.params.repoName
    );
  }
  render() {
    const { repositorie } = this.props;
    return (
      <div>
        <h1>{repositorie.name}</h1>
        <h3>{repositorie.description}</h3>
        <h3>{repositorie.stargazers_count}</h3>
        <h3>{repositorie.language}</h3>
        <h3>{repositorie.url}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repositorie: state.repositories.currentRepositorie
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestRepo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoDetail);
