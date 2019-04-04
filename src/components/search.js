import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestUser } from '../actions/searchActions';

class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleClick(e) {      
      if (e) {
        e.preventDefault();
      }
      
      this.props.requestUser(this.state.name);
      console.log(this.state.name);
    }

    handleChange(e) {
        this.setState({ name: e.target.value });
    }
  
    render() {
          
      return (
        <div>
          <div className="heading-primary--sub">
            <input type="text"
              className="searchIput" 
              placeholder="Full name" 
              id="name"
              onChange={this.handleChange}
              onKeyPress={ (target) => { if (target.charCode === 13) this.handleClick(); }}
              required 
            />
          </div>
          <div className="heading-primary--sub">
            <a href="#card" class="btn btn--white btn--animated" onClick={this.handleClick}>Pesquisar</a>
          </div>
        </div>
      );
    }
  }

  Search.propTypes = {
    requestUser: PropTypes.func.isRequired
};

export default connect(null, { requestUser })(Search);