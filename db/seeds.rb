# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


solomon2 = User.create({ email: 'solomon@solomon.com', password: 'password'})
solomon2 = User.create({ email: 'demo@demo.com', password: 'password'})

# route1 = Route.create({ name: 'route1', user_id: solomon2.id, distance: 1800 })

# waypoint1 = Waypoint.create({ lat: 36.5603, lng: -122.1563, route_id: route1.id, route_order: 1})
# waypoint1 = Waypoint.create({ lat: 36.456, lng: -122.3215, route_id: route1.id, route_order: 2})
# waypoint1 = Waypoint.create({ lat: 36.3654, lng: -122.6541, route_id: route1.id, route_order: 3})
# waypoint1 = Waypoint.create({ lat: 36.2156, lng: -122.8816, route_id: route1.id, route_order: 4})