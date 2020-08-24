import React from 'react'; 
import {sortByOrder} from '../../util/route_selectors'; 
import {Link} from 'react-router-dom'; 

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
        this.updateStateWaypoints = this.updateStateWaypoints.bind(this); 
        
    }
    
    componentDidMount() {
        this.map = new google.maps.Map(this.mapNode, this.mapOptions); 
        this.directionsRenderer.setMap(this.map); 
    
        this.map.addListener('click', (e) => { 
            this.createMarker(e.latLng); 
        })
       
        if (this.state.waypoints.length > 1) {
            this.mapDirectionsFromWaypoints(this.state.waypoints); 
        }
        
        if (this.props.formType === "Update Route") {
            this.props.fetchRoute(this.props.id).then(result => {
                this.updateStateWaypoints(Object.values(result.payload.waypoints))
            }); 
        
        }
    }

    updateStateWaypoints(waypoints) {
        this.setState({waypoints: waypoints})
    }

    renderMapWithDistance(){
        this.map = new google.maps.Map(this.mapNode, this.mapOptions);
        this.directionsRenderer.setMap(this.map); 
        this.map.addListener('click', (e) => {
            this.createMarker(e.latLng);
        })
        if (this.state.waypoints.length > 0) {
            this.mapDirectionsFromWaypoints(this.state.waypoints);
        }
    }

    componentDidUpdate(prevProps, prevState) { 
       
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
            this.computeTotalDistance(result);
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
        this.setState((state, props) => ({waypoints: newWaypoints})); 

    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.action(this.state).then(response => {
            let that = this; 
            that.props.history.push('/routes'); 
        }); 
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

   

    render() {
        let distance = (this.state.distance * 0.000621371).toFixed(2); 
        

        return (
            <div>
                <div className="map-body">
                    <div className="map-form">  
                        <h1 className='map-header'>{this.props.formType}</h1>
                        <form onSubmit={this.handleSubmit} className="form-body">
                            <label>Route name (required) 
                                <input type="text" value={this.state.name} placeholder='Name' onChange={this.update("name")}/>
                            </label>
                            <br/>
                            <br/> 
                            <button type='submit' className="session-button" id="map-submit">{this.props.formType}</button>
                        </form> 
                            <button onClick={() => this.undoLastWaypoint()} className="form-body"><i className="fas fa-undo"></i></button> 
                        <br/>
                        <div className="map-form-footer">
                            <h1 className="map-header">Route Stats</h1>
                            <h3 className="map-distance">Distance: {distance} miles</h3>
                            <div className="footer-nav">
                                <Link className='maps-link' to='/routes'>My Routes</Link>
                            </div>
                        </div>
                    </div>
                    <div id="map-container" ref={map => this.mapNode = map }></div>
                </div>
            </div>
        )
    }
} 

export default RouteMap; 

