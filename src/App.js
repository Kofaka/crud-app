import React, { Component } from 'react';
import store from './modules';
import { Provider } from 'react-redux';

import MainPage from './containers/MainPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}

export default App;
