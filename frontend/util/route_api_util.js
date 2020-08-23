export const createRoute = route => {
    return $.ajax({
        url: '/api/routes', 
        method: 'POST', 
        data: { route }
    })
}

export const fetchRoute = routeId => {
    return $.ajax({
        url: `/api/routes/${routeId}`, 
        method: "GET"
    })
}

export const updateRoute = route => {
    return $.ajax({
        url: `api/routes/${route.id}`, 
        method: 'PATCH',
        data: { route }
    })
}

export const fetchRoutes = userId => {
    return $.ajax({
        url: `/api/users/${userId}/routes`, 
        method: 'GET'
    })
}

export const deleteRoute = routeId => {
    return $.ajax({
        url: `/api/routes/${routeId}`, 
        method: 'DELETE'
    })
}


export const createWaypoint = waypoint => {
    return $.ajax({
        url: `/api/waypoints`,
        method: 'POST',
        data: { waypoint }
    })
}

export const fetchWaypoint = waypointId => {
    return $.ajax({
        url: `/api/waypoints/${waypointId}`,
        method: 'GET'
    })
}