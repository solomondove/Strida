# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


solomon = User.create({ email: 'solomon@solomon.com', password: 'password'})
demo = User.create({ email: 'demo@demo.com', password: 'password'})

route1 = Route.create({ name: 'To the Beach', user_id: demo.id, distance: 7920})
route2 = Route.create({ name: 'Golden Gate and back', user_id: demo.id, distance: 8190})

waypoint1 = Waypoint.create({ lat: 37.7770318, lng: -122.448711, route_id: route1.id, route_order: 1})
waypoint2 = Waypoint.create({ lat: 37.771909, lng: -122.448992, route_id: route1.id, route_order: 2})
waypoint3 = Waypoint.create({ lat: 37.772464, lng: -122.453888, route_id: route1.id, route_order: 3})
waypoint4 = Waypoint.create({ lat: 37.772608, lng: -122.467188, route_id: route1.id, route_order: 4})
waypoint5 = Waypoint.create({ lat: 37.771192, lng: -122.478181, route_id: route1.id, route_order: 5})
waypoint6 = Waypoint.create({ lat: 37.770898, lng: -122.487681, route_id: route1.id, route_order: 6})
waypoint7 = Waypoint.create({ lat: 37.770527, lng: -122.510972, route_id: route1.id, route_order: 7})
waypoint8 = Waypoint.create({ lat: 37.778107, lng: -122.523385, route_id: route1.id, route_order: 8})

waypoints9 = Waypoint.create({ lat: 37.7770318, lng: -122.448711, route_id: route2.id, route_order: 1}) 
waypoints10 = Waypoint.create({ lat: 37.777138, lng: -122.458591, route_id: route2.id, route_order: 2})
waypoints11 = Waypoint.create({ lat: 37.790390, lng: -122.459464, route_id: route2.id, route_order: 3})
waypoints12 = Waypoint.create({ lat: 37.795414, lng: -122.467286, route_id: route2.id, route_order: 4})
waypoints13 = Waypoint.create({ lat: 37.800955, lng: -122.469655, route_id: route2.id, route_order: 5})
waypoints14 = Waypoint.create({ lat: 37.806323, lng: -122.475577, route_id: route2.id, route_order: 6})
waypoints15 = Waypoint.create({ lat: 37.825971, lng: -122.479161, route_id: route2.id, route_order: 7})
