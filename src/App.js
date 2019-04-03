import React, { Component } from 'react';
import '../node_modules/toastr/build/toastr.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import UserProfile from './components/userProfile';
import Search from './components/search';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Search />
          <UserProfile />
        </div>
      </Provider>
    );
  }
}

export default App;
