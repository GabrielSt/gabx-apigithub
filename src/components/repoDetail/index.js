import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestRepo } from "../../actions/repoActions";

import "./styles.css";

class RepoDetail extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    this.props.requestRepo(
      this.props.match.params.userName,
      this.props.match.params.repoName
    );
  }
  handleClick() {
    window.location = this.props.repositorie.html_url;
  }
  render() {
    const { repositorie } = this.props;
    return (
      <section class="section-repositorie">
        <div class="row">
          <div class="col-1-of-3" />

          <div class="col-1-of-3">
            <div class="repositorie-box" onClick={this.handleClick}>
              <i class="repositorie-box__icon fa fa-github" />
              <h3 class="heading-secondary u-margin-bottom-small">
                {repositorie.name}
              </h3>
              <p class="repositorie-box__text">{repositorie.description}</p>
              <p class="repositorie-box__text">{repositorie.language}</p>
              <p class="repositorie-box__text">
                {repositorie.stargazers_count}
                <i class="icon fa fa-star" />
              </p>
            </div>
          </div>

          <div class="col-1-of-3" />
        </div>
      </section>
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
