import React, { Component } from 'react'
import Link from 'gatsby-link'
import Contribute from '../components/contribute.js'
import LoginHandler from '../components/login.js'

class SecondPage extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Contribute</h1>
        <p>Hi {this.state.user} (blank?), Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem, 
        nobis odio animi accusantium excepturi reprehenderit aspernatur exercitationem 
        provident aut hic repellendus sint, veniam, quaerat sed vitae expedita fugiat quidem.</p>
        <LoginHandler />
        <p><small>Start by typing a name or address below...</small></p>
        <Contribute submitter={this.state.user}/>
        <div className="mt-5">
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    )
  }
}

export default SecondPage