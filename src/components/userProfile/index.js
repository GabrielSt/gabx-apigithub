import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LinkButton from "../linkButton";

import { requestUser } from "../../actions/userActions";

import "./styles.css";

class UserProfile extends Component {
  componentWillReceiveProps(newProps) {
    const tesNode = ReactDOM.findDOMNode(this.refs.userProfile);
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: tesNode.offsetTop
    });
  }
  componentWillMount() {
    this.props.requestUser(this.props.match.params.userName);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userName !== prevProps.match.params.userName) {
      this.props.requestUser(this.props.match.params.userName);
    }
  }
  render() {
    const user = this.props.user || {};
    return (
      <section
        className="section-userProfile"
        id="section-userProfile"
        ref="userProfile"
      >
        <div className="row">
          <div className="col-1-of-3" />
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture">&nbsp;</div>

                <img
                  src={user.avatar_url}
                  alt="Person on a tour"
                  className="story__img"
                />

                <h4 className="card__heading">
                  <span className="card__heading-span">{user.login}</span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Email: {user.email}</li>
                    <li>Bio: {user.bio}</li>
                    <li>Seguidores: {user.followers}</li>
                    <li>Seguindo: {user.following}</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">{user.public_repos}</p>
                    <p className="card__price-value">Repositories</p>
                  </div>
                  <LinkButton
                    goTo={`/reposList/${user.login}`}
                    btnLabel="Show me!"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3" />
        </div>
      </section>
    );
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
)(UserProfile);
