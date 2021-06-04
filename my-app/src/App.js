import './App.css';

import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    console.log("App Constructor")
    this.state ={
      user: []
    }
  }
  //axios call will go here
  componentDidMount() {
    console.log("App CDM")
    axios.get(`https://api.github.com/users/dujules23`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }


  componentDidUpdate() {
    console.log("App CDU")
  }

  render () {
    console.log("App Render")
    return (
      <div className="App">
        <h1>Git Hub User</h1>
      </div>
    );
  };
}
export default App;
