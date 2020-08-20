import React from 'react'; 
import {createMarker, MarkerManager } from '../../util/marker_manager'; 

class RouteMap extends React.Component{
    constructor(props){
        super(props); 
        this.directionsService = new google.maps.DirectionsService(); 
        this.directionsRenderer = new google.maps.DirectionsRenderer({ 
            map: this.map
        }); 

        this.state = {
            distance: 0, 
            waypoints: [], 
            markers: [], 
            // waypoints: [{ lat: 37.756373, lng: -122.410569 }, { lat: 37.761453, lng: -122.411420 }, { lat: 37.765124, lng: -122.422420 }], 
        }
        
        this.mapDirectionsFromMarkers = this.mapDirectionsFromMarkers.bind(this); 
        this.renderCallback = this.renderCallback.bind(this); 
        this.undoLastWaypoint = this.undoLastWaypoint.bind(this); 
    }
    
    componentDidMount() {
        const mapOptions = {
            center: {lat: 37.7758, lng: -122.435 }, 
            zoom: 13
        }; 
        this.map = new google.maps.Map(this.mapNode, mapOptions); 
        this.MarkerManager = new MarkerManager(this.map); 
        this.directionsRenderer.setMap(this.map); 

        this.map.addListener('click', (e) => { 
            this.createMarker(e.latLng); 
        })

        this.directionsRenderer.addListener('directions_changed', () => {
            let result = this.directionsRenderer.getDirections();
            this.computeTotalDistance(result); 
        })
       
        if (this.state.waypoints.length > 0) {
            this.mapDirectionsFromMarkers(this.state.waypoints); 
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.waypoints.length != this.state.waypoints.length) {
            if (this.state.waypoints.length > 0) {
                this.mapDirectionsFromMarkers(this.state.waypoints); 
            }
        }
    }
    
    //updates state.waypoints based on the results from the directions_changed event listener
    updateWaypoints(result) {
        let newWaypoints = []; 
        result.geocoded_waypoints.forEach(point => {
            newWaypoints.push(point.place_id);
        })
        this.setState({ waypoints: newWaypoints });
    }

    //calculates state.distance of route based on results from directions_changed event listener
    computeTotalDistance(result) {
        let total = 0; 
        let thisRoute = result.routes[0]; 
        thisRoute.legs.forEach(leg => {
            total += leg.distance.value; 
        })
        this.setState({ distance: total });
    }

    //takes in a position formatted as a LatLng Maps object, creates marker on map and adds to local state. 
    createMarker(position){
        //creates and updates state.waypoints
        let newCoordinates = ({lat: position.lat(), lng: position.lng() })
        let newWaypoints = Object.assign([], this.state.waypoints); 
        newWaypoints.push(newCoordinates); 
        
        //creates and updates state.markers
        let marker = new google.maps.Marker({
            position: position
        })
        let newMarkers = Object.assign([], this.state.markers); 
        newMarkers.push(marker); 

        this.setState({markers: newMarkers, waypoints: newWaypoints}); 
        marker.setMap(this.map); 
    }

    //takes in positons formatted as an array of positions objects eg. [{ lat: sample, lng: sample }]
    mapRouteMarkers(positions) {
        let routePath = new google.maps.Polyline({
            path: positions, 
            geodesic: true, 
            strokeColor: '#FF0000', 
            strokeOpacity: 1.0, 
            strokeWeight: 2
        }); 

        routePath.setMap(this.map); 
    }

    //helper function for mapDirectionsFromMarkers
    renderCallback(result, status) { 
        if (status === 'OK') {
            this.directionsRenderer.setDirections(result);
        }
    }

    //helper function for mapDirectionsFromMarkers
    createWaypoint(position){
        return { location: position }
    }

    mapDirectionsFromMarkers(positions, travelMode="WALKING"){
        let origin = positions[0]; 
        let destination = positions[positions.length-1]; 
        let middlePosArray = positions.slice(1, positions.length-1);
        let waypoints = middlePosArray.map(pos => this.createWaypoint(pos)); 
        
        let request = {
            origin: origin, 
            destination: destination, 
            waypoints: waypoints, 
            travelMode: travelMode, 
        };  

        this.directionsService.route(request, this.renderCallback)      
    }

    undoLastWaypoint() {
        let newWaypoints = this.state.waypoints.slice(0); 
        newWaypoints.pop(); 
        let newMarkers = this.state.markers.slice(0); 
        let targetMark = newMarkers.pop(); 
        targetMark.setMap(null); 

        this.setState({waypoints: newWaypoints, markers: newMarkers}); 
    }

    render() {
        return (
            <div>
                <h1>Map!</h1>
                <div id="map-container" ref={map => this.mapNode = map }></div>
                <h3>{this.state.distance}</h3>
                <button onClick={() => this.undoLastWaypoint()}>Undo</button>
            </div>
        )
    }
} 

export default RouteMap; 

