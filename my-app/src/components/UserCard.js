import React from 'react';

class UserCard extends React.Component {
  
  render () {
    console.log('User Card Render')
    // console.log(this.props.user.name)  used this to test the data to make sure it was passed down and could be accessed.
    return (
      <div className="user-card">
        <img className="user-image" alt="userAvatar" src={this.props.user.avatar_url} />
        <div className="user-info">{this.props.user.name}</div>
        <div className="user-info">{this.props.user.login}</div>
        <div className="user-info">{this.props.user.location}</div>
      </div>
    );
  };
}
export default UserCard;