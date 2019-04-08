import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import UserProfile from "../../components/userProfile";
import Error from "../../components/error";
import _ from "lodash";

import { requestUser } from "../../actions/userActions";

class UserProfileContainer extends Component {
  componentWillMount() {
    this.props.requestUser(this.props.match.params.userName);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userName !== prevProps.match.params.userName) {
      this.props.requestUser(this.props.match.params.userName);
    }
  }
  render() {
    if (!_.isEmpty(this.props.user)) {
      return <UserProfile {...this.props} />;
    } else {
      return <Error error="userError" />;
    }
  }
}

UserProfile.propTypes = {
  requestUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user.currentUser
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);
