import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import firebase from '../utilities/firebase.js'

const mapsStyle = [
  {
      "featureType": "all",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "weight": "2.00"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#9c9c9c"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#f2f2f2"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "saturation": -100
          },
          {
              "lightness": 45
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#eeeeee"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#7b7b7b"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#46bcec"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#c8d7d4"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#070707"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  }
]

const containerStyle = {
  width: '100%',
  height: '450px'
}

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false
    }
  }

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
  
    onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };
  componentDidMount() {
    const locationsRef = firebase.database().ref('breweries');    
    locationsRef.on('value', (snapshot) => {
      let locations = snapshot.val();
      let newState = [];
      for (let location in locations) {
        newState.push({
          id: locations[location],
          name: locations[location].name,
          address: locations[location].address,
          position: locations[location].position
        });
      }
      this.setState({
        locations: newState
      });
    });
  }
  render() {
    console.log(this.state.locations)
    return (
      <Map 
        google={this.props.google} 
        zoom={11}
        style={containerStyle}
        styles={mapsStyle}
        initialCenter={{
          lat: 42.2625932,
          lng: -71.8022934
        }} >

        { this.state.locations.map( (location, index ) => (
            <Marker
                key={'location'+index}
                title={location.name}
                name={location.name}
                onClick={this.onMarkerClick}
                position={location.position} 
            />
        )) }

        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC2DcHCRxkOgPJ1SQAeYcaH61jMyRMBsNI')
})(MapContainer)