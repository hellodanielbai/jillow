import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { Marker } from 'mapbox-gl';
// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX
mapboxgl.accessToken = "pk.eyJ1IjoiaGVsbG9kYW5pZWxiYWkiLCJhIjoiY2wwcmEyOGR5MDFnazNkbzJkdGxmeDdnMyJ9.gV3BunL1RA4JPzbl9Zn2UQ"

const mapData = [{
    'location': 'address',
    'city': 'Los Angeles', 
    'state': 'CA',
    'coordinates': [-118.3841718, 34.0524269]
}]

class ListingMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lng: -118.3322843,
            lat: 34.0199463,
            zoom: 11.0
        }
    }

    componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v10', 
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
        })

        map.on('move', () => {
            const { lng, lat } = map.getCenter();
            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });


        mapData.forEach((location) => {
			var marker = new Marker()
                        .setLngLat(location.coordinates)
                        .setPopup(new mapboxgl.Popup({ offset: 30 })
                            .setHTML( '<h4 className="popup-heading">' + location.city + '</h4>' + location.location ))
                        .addTo(map);
		})

        return () => map.remove();
    }

    render() {
        return (
            <div className='map-container'>
                <div ref={el => this.mapContainer = el} className='map'/>
            </div>
        )
    }
}

export default ListingMap
