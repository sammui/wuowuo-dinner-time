import React, { Component } from 'react';

import CoverEditorComponent from './CoverEditorComponent'
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="app">
        <canvas id="result" className="hide"></canvas>
        <div hidden className="app-logo"></div>
        <div className="app-title">
          <img src="images/complete-title.png" alt="" className="app-main-title"/>
        </div>
        <CoverEditorComponent/>
      </div>
    );
  }
}

export default App;
