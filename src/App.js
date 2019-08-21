import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MemeForm from './components/MemeForm';
import AboutUs from './components/AboutUs';
import { HashRouter, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="app-div" >
        <Header />
        <Switch>
          <Route exact path="meme-maker/" component={MemeForm} />
          <Route path="meme-maker/AboutUs" component={AboutUs} />
        </Switch>
      </div>
    );
  }
}

export default App;
