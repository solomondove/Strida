import React from 'react'; 
import {sortByOrder} from '../../util/route_selectors'; 

class RouteMap extends React.Component{
    constructor(props){
        super(props); 
        this.directionsService = new google.maps.DirectionsService(); 
        this.directionsRenderer = new google.maps.DirectionsRenderer(); 

        this.state = {
            name: this.props.name, 
            distance: this.props.distance,
            waypoints: this.props.waypoints,   
            user_id: this.props.user_id, 
            id: this.props.id
        }
        
        this.mapOptions = {
            center: this.state.waypoints.length === 0 ? {lat: 37.7758, lng: -122.435 } : this.state.waypoints[this.state.waypoints.length -1 ],
            zoom: 14
        }; 

        this.mapDirectionsFromMarkers = this.mapDirectionsFromWaypoints.bind(this); 
        this.renderCallback = this.renderCallback.bind(this); 
        this.undoLastWaypoint = this.undoLastWaypoint.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    
    componentDidMount() {
        this.map = new google.maps.Map(this.mapNode, this.mapOptions); 
        this.directionsRenderer.setMap(this.map); 
    
        this.map.addListener('click', (e) => { 
            this.createMarker(e.latLng); 
        })
    
        this.directionsRenderer.addListener('directions_changed', () => {
            let result = this.directionsRenderer.getDirections();
            this.computeTotalDistance(result); 
        })
       
        if (this.state.waypoints.length > 1) {
            this.mapDirectionsFromWaypoints(this.state.waypoints); 
        }
        
        if (this.props.formType === "Update Route") {
            this.props.fetchRoute(this.props.id); 
        
        }
        
    }

    componentDidUpdate(prevProps, prevState) { 
        if (prevState.waypoints.length < this.props.waypoints.length ) {
            this.setState({ waypoints: this.props.waypoints })
        }
        if (prevState.waypoints.length !== this.state.waypoints.length) {
            this.map = new google.maps.Map(this.mapNode, this.mapOptions);
            this.directionsRenderer.setMap(this.map); 

            this.map.addListener('click', (e) => {
                this.createMarker(e.latLng);
            })

            if (this.state.waypoints.length > 0) {
                this.mapDirectionsFromWaypoints(this.state.waypoints); 
            }
        }
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
        let newCoordinates = ({lat: position.lat(), lng: position.lng() })
        let newWaypoints = Object.assign([], this.state.waypoints); 
        newWaypoints.push(newCoordinates); 
        this.setState({ waypoints: newWaypoints });  
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

    mapDirectionsFromWaypoints(positions, travelMode="WALKING"){
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
        this.setState({waypoints: newWaypoints}); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.action(this.state); 
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        console.log(this.state); 
        return (
            <div>
                <div className="map-body">
                    <div className="map-form">  
                        <h1 className='map-header'>{this.props.formType}</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label>Route Name: 
                                <input type="text" value={this.state.name} onChange={this.update("name")}/>
                            </label>
                            <button type='submit'>{this.props.formType}</button>
                        </form>
                        <button onClick={() => this.undoLastWaypoint()}>Undo Last Segment</button>
                        
                    </div>
                    <div id="map-container" ref={map => this.mapNode = map }></div>
                </div>
                <div className="map-footer">
                    <h3>{this.state.distance}</h3>
                </div>
            </div>
        )
    }
} 

export default RouteMap; 

