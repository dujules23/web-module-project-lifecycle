import logo from './logo.svg';
import './App.css';

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      user: []
    }
  }


  render () {
    return (
      <div className="App">
        <h1>Git Hub User</h1>
      </div>
    );
  };
}
export default App;
