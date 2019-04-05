import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { requestRepoList } from '../actions/repoActions';


class ReposList extends Component {

  componentWillMount() {
    this.props.requestRepoList(this.props.match.params.userName);
  }

  renderRows() {
    const repositories = this.props.repositories || [];
    return repositories.map(rep => (
        <tr key={rep.id}>
            <td>{rep.name}</td>
            <td>{rep.description}</td>
            <td>{rep.stargazers_count}</td>
        </tr>
    ))
  }

  render() {
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>StarGazers</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        </div>
    )
  }
}

ReposList.propTypes = {
    requestRepoList: PropTypes.func.isRequired,
    // repositories: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => ({
    repositories: state.repositories.repoList
});

const mapDispatchToProps = dispatch => bindActionCreators({ requestRepoList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReposList)
