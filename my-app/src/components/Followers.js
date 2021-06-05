import React from 'react';
import './Followers.css'

import axios from 'axios';

class Followers extends React.Component {
  constructor() {
    super();
    console.log('Followers Constructor')
    this.state ={
      followers: []
    }
  }

  // Api Call goes here 
  componentDidMount() {
    console.log("Followers CDM")
    axios.get(`https://api.github.com/users/dujules23/followers`)
      .then(res => {
        console.log(res.data)
        this.setState({
          ...this.state,
          followers: res.data
        });
        console.log(this.state)
      })
      .catch(err => console.log(err))
      
  }

  render () {
    console.log('Followers Render')
    console.log(this.state.followers)
    
    return (
      <div className="followers"> Followers:
        {this.state.followers.map((follower) => {
          return <div key={follower.id}>{follower.login}</div>
        })}
      </div>
    );
  };
}
export default Followers;