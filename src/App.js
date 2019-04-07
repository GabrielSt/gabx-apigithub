import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

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
