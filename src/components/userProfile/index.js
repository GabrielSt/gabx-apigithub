import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import LinkButton from "../linkButton";

import "./styles.css";

class UserProfile extends Component {
  componentDidMount() {
    const tesNode = ReactDOM.findDOMNode(this.refs.userProfile);
    if (tesNode !== null) {
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: tesNode.offsetTop
      });
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
                  alt="User"
                  className="card_user_img"
                />

                <h4 className="card__heading">
                  <span className="card__heading-span">{user.login}</span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Email: {user.email}</li>
                    <li>Bio: {user.bio}</li>
                    <li>Followers: {user.followers}</li>
                    <li>Following: {user.following}</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__cta">
                  <div className="card__repo-box">
                    <p className="card__repo-count">{user.public_repos}</p>
                    <p className="card__repo-label">Repositories</p>
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
  user: PropTypes.object.isRequired
};

export default UserProfile;
