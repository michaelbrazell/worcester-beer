import React, { Component } from 'react'
import Link from 'gatsby-link'
import firebase from '../utilities/firebase.js'

class SecondPage extends Component {
  constructor() {
    super();
    this.state = {
      locations: []
    }
  }

  componentDidMount() {
    const locationsRef = firebase.database().ref('breweries');    
    locationsRef.on('value', (snapshot) => {
      let locations = snapshot.val();
      let newState = [];
      for (let location in locations) {
        newState.push({
          id: location,
          name: locations[location].name,
          address: locations[location].address
        });
      }
      this.setState({
        locations: newState
      });
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Hi from the second page</h1>
        {this.state.locations.map((location) => {
          return (
            <li key={location.id}>{location.name}, {location.address}</li>
          )
        })}
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}

export default SecondPage
