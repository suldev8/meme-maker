import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MemeForm from './MemeForm';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MemeForm />
      </div>
    );
  }
}

export default App;
