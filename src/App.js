import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import UserProfile from './components/userProfile';
import Search from './components/search';
import Header from './components/header';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
