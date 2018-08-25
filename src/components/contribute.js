import React from 'react';
import firebase from '../utilities/firebase.js'
import {GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '',
      name: '',
      lookupAddress: '',
      description: '',
      position: [],
      submitter: this.props.submitter
    };
  }

  // Used by the GeoCode Lookup
  handleChange = address => {
    this.setState({ address });
  };

  // Used by Geocode lookup to pass the results of address to geocode
  // and return results, assigning them to the state
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ 
        lookupAddress: address,
        position: latLng 
      }))
      .catch(error => console.error('Error', error));
  };

  // Used to update the state of the fields so firebase 
  // gets its data from the state
  handleFields = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // Used to submit the data to firebase
  handleSubmit = (e) => {
    e.preventDefault();
    const itemsRef = firebase.database().ref('bars');
    const bar = {
      name: this.state.name,
      description: this.state.description,
      address: this.state.address,
      position: this.state.position,
    }
    itemsRef.push(bar);
    // Reset the fields to blank on submit
    this.setState({
      name: '',
      description: '',
      address: '',
      lookupAddress: '',
      position: [{
        lat: '',
        lng: ''
      }]
    });
  }
  

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input form-control my-3',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
            <h4 className="mt-3">Submission</h4>
            <form onSubmit={(e) => this.handleSubmit(e)} className="">
              <div className="form-group">
                <label htmlFor="name" className="mb-0">Name</label>
                <input type="text" className="form-control mb-2" name="name" onChange={this.handleFields} value={this.state.name}/>
                <label htmlFor="description" className="mt-2 mb-0">Description</label>
                <textarea rows="3" className="form-control mb-2" name="description" onChange={this.handleFields} value={this.state.description}/>
                <label htmlFor="lookupAddress" className="mt-2 mb-0">Address <small>(For accuracy, please use the auto-complete above)</small></label>
                <input type="text" className="form-control mb-2" name="lookupAddress" onChange={this.handleFields} value={this.state.lookupAddress}/>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <label htmlFor="lat" className="mt-2 mb-0">Latitude</label>
                    <input type="text" className="form-control mb-2" disabled name="lat" onChange={this.handleFields} value={this.state.position.lat}/>  
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <label htmlFor="lng" className="mt-2 mb-0">Longitude</label>
                    <input type="text" className="form-control mb-2" disabled name="lng" onChange={this.handleFields} value={this.state.position.lng}/>
                  </div>
                </div>
                <label htmlFor="submitter" className="mb-0">Submitted by</label>
                <input type="text" className="form-control mb-2" name="submitter" onChange={this.handleFields} value={this.state.submitter}/>
              </div>

              <button className="btn btn-primary">Submit Listing</button>
            </form>
            

          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC2DcHCRxkOgPJ1SQAeYcaH61jMyRMBsNI')
})(LocationSearchInput)