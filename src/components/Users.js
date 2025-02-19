import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    debugger
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user) => <li>{user.username}</li>)}
        </ul>
        <p>{this.props.userCount}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount: state.users.length
  };
}

export default connect(mapStateToProps, null)(Users);
