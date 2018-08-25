import React from 'react';
import firebase, { auth, provider } from '../utilities/firebase.js';

class LoginHandler extends React.Component {
  constructor() {
    super();
    this.state = { 
      user: null
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }
  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }

  render() {
    return (
      <div>
        
        {this.state.user ?
          <div>
            <div className="user-profile">
              <p>Hello {this.state.user.displayName} <a onClick={this.logout}>(Sign Out)</a></p>
              <img src={this.state.user.photoURL} />
            </div>
          </div>
          :
          <div className="wrapper">
            <p>You must be signed in to view your profile</p>
            <p><button className="btn btn-primary" onClick={this.login}>Sign In</button></p>
          </div>
        }
      </div>
    );
  }
}

export default LoginHandler