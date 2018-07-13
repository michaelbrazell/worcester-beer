import React, { Component } from 'react'
import Link from 'gatsby-link'
import firebase from '../utilities/firebase.js'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


class SecondPage extends Component {
  constructor() {
    super();
    this.state = {
      barName: '',
      barAddress: '',
      bars: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('bars');
    const bar = {
      barName: this.state.barName,
      barAddress: this.state.barAddress
    }
    itemsRef.push(bar);
    this.setState({
      barName: '',
      barAddress: ''
    });
    console.log(bar)
  }

  render() {
    return (
      <div className="container">
        <h1>Contribute</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem, 
        nobis odio animi accusantium excepturi reprehenderit aspernatur exercitationem 
        provident aut hic repellendus sint, veniam, quaerat sed vitae expedita fugiat quidem.</p>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 offset-md-3">
            <form  onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="barName">Name</label>
                <input type="text" className="form-control" name="barName" placeholder="Name of the Bar" onChange={this.handleChange} value={this.state.barName}/>
                <label htmlFor="barAddress">Address</label>
                <input type="text" className="form-control" name="barAddress" placeholder="Address" onChange={this.handleChange} value={this.state.barAddress} />
              </div>
              
              <button className="btn btn-primary">Add Item</button>
            </form>  
          </div>
        </div>
        
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}

export default SecondPage
