import React, { Component } from 'react';

export default class ReposList extends Component {
  render() {
    return (
        <h1>{this.props.match.params.userName}</h1>
    );
  }
}
