import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import ShoppingList from './components/ShoppingList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
