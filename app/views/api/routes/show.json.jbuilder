json.route do 
    json.partial! 'route', route: @route
end 

json.waypoints do 
    @route.waypoints.each do |waypoint|
        json.set! waypoint.id do 
            json.extract! waypoint, :id, :lat, :lng, :route_order, :route_id
        end 
    end 
end 

