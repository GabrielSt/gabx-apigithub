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
        <div className="row">
          <div className="col-sm-4 text-left" style={{marginTop: 20}}>
            <input type="text"
              style={{marginRight: 10}}
              onChange={this.handleChange}
              onKeyPress={ (target) => { if (target.charCode === 13) this.handleClick(); }}
            />
            <button onClick={this.handleClick} >Search</button>
          </div>
        </div>
      );
    }
  }

  Search.propTypes = {
    requestUser: PropTypes.func.isRequired
};

export default connect(null, { requestUser })(Search);