import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestUser } from '../actions/searchActions';

// import { Container } from './styles';

class UserProfile extends Component {
    render() {
        const user = this.props.user || {};
        return (
            <div>
                <h1>{user.login}</h1>
            </div>
        );
    }
}

UserProfile.propTypes = {
    requestUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user.currentUser
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, { requestUser })(UserProfile)
