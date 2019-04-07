import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { requestUser } from "../actions/searchActions";
import { Link, withRouter } from "react-router-dom";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    if (e) {
      e.preventDefault();
    }

    this.props.history.push(`/userProfile/${this.state.name}`);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="heading-primary--sub">
          <input
            type="text"
            className="searchIput"
            placeholder="User name"
            id="name"
            onChange={this.handleChange}
            onKeyPress={target => {
              if (target.charCode === 13) this.handleClick();
            }}
            required
          />
        </div>
        <div className="heading-primary--sub">
          <Link
            to={`/userProfile/${this.state.name}`}
            className="btn btn--white btn--animated"
          >
            Search
          </Link>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  requestUser: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    null,
    { requestUser }
  )(Search)
);
