import React from 'react';
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
      details: '',
      location: []
    };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ 
        details: address,
        location: latLng 
      }))
      .catch(error => console.error('Error', error));
  };
  handleSubmit = (event) => {
    let locationData = {
      name: this.state.details,
      lat: this.state.location.lat,
      lng: this.state.location.lng
    }
    
    this.props.onAddLocation(locationData);            
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
            <h4>Results</h4>
            <form onSubmit={this.handleSubmit()} className="my-3">
              <div className="form-group">
                <label htmlFor="nameAddress" className="mt-2 mb-0">Name / Address</label>
                <input type="text" className="form-control mb-2" name="nameAddress" value={this.state.details}/>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <label htmlFor="lat" className="mt-2 mb-0">Latitude</label>
                    <input type="text" className="form-control mb-2" name="lat" value={this.state.location.lat}/>  
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <label htmlFor="lng" className="mt-2 mb-0">Longitude</label>
                    <input type="text" className="form-control mb-2" name="lng" value={this.state.location.lng}/>
                  </div>
                </div>
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