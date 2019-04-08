import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LinkButton from "../linkButton";

import "./styles.css";

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
          <LinkButton
            goTo={`/userProfile/${this.state.name}`}
            btnLabel="Search"
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
