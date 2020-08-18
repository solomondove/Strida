import React from 'react'; 

class RouteMap extends React.Component{
    componentDidMount() {
        const mapOptions = {
            center: {lat: 37.7758, lng: -122.435 }, 
            zoom: 13
        }; 
        this.map = new google.maps.Map(this.mapNode, mapOptions); 
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