import React from 'react'; 
import {createMarker, MarkerManager } from '../../util/marker_manager'; 

class RouteMap extends React.Component{
    constructor(props){
        super(props); 
        this.directionsService = new google.maps.DirectionsService(); 
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            draggable: true, 
            map: this.map
        }); 

        this.state = {
            distance: 0, 
            waypoints: [], 
        }
        
        this.mapDirectionsFromMarkers = this.mapDirectionsFromMarkers.bind(this); 
        this.renderCallback = this.renderCallback.bind(this); 
    }
    
    componentDidMount() {
        const mapOptions = {
            center: {lat: 37.7758, lng: -122.435 }, 
            zoom: 13
        }; 
        this.map = new google.maps.Map(this.mapNode, mapOptions); 
        this.MarkerManager = new MarkerManager(this.map); 
        this.directionsRenderer.setMap(this.map); 
        
        let positions = [{lat: 37.756373, lng: -122.410569}, {lat: 37.761453, lng: -122.411420}, {lat: 37.765124, lng: -122.422420}]; 


        this.directionsRenderer.addListener('directions_changed', () => {
        
            let result = this.directionsRenderer.getDirections(); 
            this.updateWaypoints(result); 
            this.computeTotalDistance(result); 
            debugger; 
            console.log(result); 
        })
        // positions.forEach(pos => createMarker(pos, this.map)); 
        // this.mapRouteMarkers(positions); 
        
        this.mapDirectionsFromMarkers(positions); 
        
    }
    
    //updates state.waypoints based on the results from the directions_changed event listener
    updateWaypoints(result) {
        console.log(this.state.waypoints); 
        let newWaypoints = []; 
        result.geocoded_waypoints.forEach(point => {
            newWaypoints.push(point.place_id);
        })
        this.setState({ waypoints: newWaypoints });
        console.log(this.state.waypoints); 
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

    //takes in a position formatted as a LatLng Maps object
    createMarker(position){
        let marker = new google.maps.Marker({
            position: position, 
        })
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
        console.log(result); 
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





    render() {
        return (
            <div>
                <h1>Map!</h1>
                <div id="map-container" ref={map => this.mapNode = map }></div>
            
            </div>
        )
    }
} 

export default RouteMap; 

