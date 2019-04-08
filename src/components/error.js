import React, { Component } from "react";
import UserError from "../resources/images/user-error.png";
import GenericError from "../resources/images/error.png";
import ReactDOM from "react-dom";

// import { Container } from './styles';

export default class Erro extends Component {
  componentDidMount() {
    const tesNode = ReactDOM.findDOMNode(this.refs.error);
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: tesNode.offsetTop
    });
  }
  render() {
    if (this.props.error === "userError") {
      return (
        <section className="section-error" id="section-erroe" ref="error">
          <div className="errorWrapper">
            <img src={UserError} alt="Logo" className="error_img" />
          </div>
        </section>
      );
    } else {
      return (
        <section className="section-error" id="section-erroe" ref="error">
          <div className="errorWrapper">
            <img src={GenericError} alt="Logo" className="error_img" />
          </div>
        </section>
      );
    }
  }
}
