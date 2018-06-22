import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

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

const mapLocations = [
    {
        title: 'Greater Good Imperial Brewing',
        name: 'Greater Good Imperial Brewing',
        position: {
            lat: 42.287557,
            lng: -71.801636
        }
    },
    {
        title: 'Wormtown Brewery',
        name: 'Wormtown Brewery',
        position: {
            lat: 42.263498,
            lng: -71.791172
        }
    },
    {
        title: '3Cross Fermentation Coop',
        name: '3Cross Fermentation Coop',
        position: {
            lat: 42.243875,
            lng: -71.830257
        }
    },
    {
        title: 'Flying Dreams Brewing Co.',
        name: 'Flying Dreams Brewing Co.',
        position: {
            lat: 42.254561,
            lng: -71.825493
        }
    },
    {
        title: '7 Saws Brewing Company',
        name: '7 Saws Brewing Company',
        position: {
            lat: 42.350053,
            lng: -71.860057
        }
    },
    {
        title: 'CraftRoots Brewing',
        name: 'CraftRoots Brewing',
        position: {
            lat: 42.141541,
            lng: -71.492362
        }
    },
    {
        title: 'Gardner Ale House',
        name: 'Gardner Ale House',
        position: {
            lat: 42.575736,
            lng: -71.997048
        }
    },
    {
        title: 'Homefield Kitchen & Brewery',
        name: 'Homefield Kitchen & Brewery',
        position: {
            lat: 42.115728,
            lng: -72.106603
        }
    },
    {
        title: 'Kretschmann Brewery & Beer Garden',
        name: 'Kretschmann Brewery & Beer Garden',
        position: {
            lat: 42.050908,
            lng: -71.881267
        }
    },
    {
        title: 'Medusa Brewing Company',
        name: 'Medusa Brewing Company',
        position: {
            lat: 42.390950,
            lng: -71.566769
        }
    },
    {
        title: 'Purgatory Beer Company',
        name: 'Purgatory Beer Company',
        position: {
            lat: 42.098538,
            lng: -71.646514
        }
    },
    {
        title: 'Rapscallion Brewery',
        name: 'Rapscallion Brewery',
        position: {
            lat: 42.141500,
            lng: -72.110500
        }
    },
    {
        title: 'Timberyard Brewing Company',
        name: 'Timberyard Brewing Company',
        position: {
            lat: 42.230953,
            lng: -72.029140
        }
    },
    {
        title: 'Tree House Brewing Company',
        name: 'Tree House Brewing Company',
        position: {
            lat: 42.139276,
            lng: -72.017215
        }
    },
    {
        title: 'Wachusett Brewing Company',
        name: 'Wachusett Brewing Company',
        position: {
            lat: 42.558417,
            lng: -71.870781
        }
    },
    {
        title: 'Stone Cow Brewery',
        name: 'Stone Cow Brewery',
        position: {
            lat: 42.424736,
            lng: -72.124258
        }
    },
    {
        title: 'Cold Harbor Brewing',
        name: 'Cold Harbor Brewing',
        position: {
            lat: 42.273907,
            lng: -71.625122            
        }
    },
    {
        title: 'Henry and Fran Brewing Co.',
        name: 'Henry and Fran Brewing Co.',
        position: {
            lat: 42.366759,
            lng: -71.785627
        }
    },
    {
        title: 'Title',
        name: 'Title',
        position: {
            lat: 42.550053,
            lng: -71.660057
        }
    }
]

export class MapContainer extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

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
  render() {
    return (
      <Map 
        google={this.props.google} 
        zoom={12}
        style={containerStyle}
        styles={mapsStyle}
        initialCenter={{
          lat: 42.2625932,
          lng: -71.8022934
        }} >

        { mapLocations.map( (location, index ) => (
            <Marker
                key={'location'+index}
                title={location.title}
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