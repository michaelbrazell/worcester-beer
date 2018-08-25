import React from 'react'
import Link from 'gatsby-link'
import firebase, { auth, provider } from '../utilities/firebase.js';

class Header extends React.Component {
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


  render () {
    return (
      <nav className="site-header sticky-top">
        <div className="row no-gutters">
          <div className="col">
          <div className="d-flex flex-column justify-content-between justify-content-center">
            <Link to="/" className="logo py-3 px-2">
              Drink Worcester Beer!
            </Link>
          </div>
          </div>
          <div className="col-md-auto">
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <Link className="p-4 d-none d-md-inline-block" to="/explore">Explore</Link>
              <Link className="p-4 d-none d-md-inline-block" to="/events">Events</Link>
              <Link className="p-4 d-none d-md-inline-block" to="/contribute">Contribute</Link>
              <Link className="p-4 d-none d-md-inline-block" to="/merch">Merch</Link>
              {this.state.user ?                
                <Link className="p-4 d-none d-md-inline-block login-dropdown" to="/profile">{this.state.user.displayName} <img src={this.state.user.photoURL} className="profile-image ml-2" />           </Link>
                :
                <Link className="p-4 d-none d-md-inline-block login-dropdown" onClick={this.login}>Sign in</Link>
              }
            </div>
          </div>
        </div>
      </nav>

    )
  }
}

export default Header
