import React, { Component } from "react";

import PropTypes from "prop-types";

import "./styles.css";

class RepoDetail extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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

RepoDetail.propTypes = {
  repositorie: PropTypes.object.isRequired
};

export default RepoDetail;
