import React, { Component } from "react";
import { Link } from "react-router-dom";

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

export default LinkButton;
