import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RepoDetail from "../../components/repoDetail";

import { requestRepo } from "../../actions/repoActions";

class RepoDetailContainer extends Component {
  componentWillMount() {
    this.props.requestRepo(
      this.props.match.params.userName,
      this.props.match.params.repoName
    );
  }
  render() {
    return <RepoDetail {...this.props} />;
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
)(RepoDetailContainer);
