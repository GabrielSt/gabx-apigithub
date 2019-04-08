import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./styles.css";

class LinkButton extends Component {
  render() {
    return (
      <Link to={this.props.goTo} className="btn btn--white">
        {this.props.btnLabel}
      </Link>
    );
  }
}

LinkButton.propTypes = {
  goTo: PropTypes.string.isRequired,
  btnLabel: PropTypes.string.isRequired
};

export default LinkButton;
