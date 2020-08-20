import React from 'react'; 

export class MarkerManager {
    constrcutor(map){
        this.map = map; 
        this.markers = {}; 
    }

    updateMarkers(mark) {
        console.log("time to update"); 
    }

}

//testing modularity of routes/route_map
export function createMarker(position, map) {
    let marker = new google.maps.Marker({
        position: position,
    })
    marker.setMap(map);

}