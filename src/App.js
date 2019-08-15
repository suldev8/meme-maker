import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MemeForm from './components/MemeForm';

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
