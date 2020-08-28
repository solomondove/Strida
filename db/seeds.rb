# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Route.destroy_all 
Waypoint.destroy_all

solomon = User.create({ email: 'solomon@solomon.com', password: 'password'})
demo = User.create({ email: 'strider@wingfoot.com', password: 'password'})

route1 = Route.create({ name: 'To The Beach', user_id: demo.id, distance: 7920})
route2 = Route.create({ name: 'Golden Gate And Back', user_id: demo.id, distance: 8190})
route3 = Route.create({ name: 'Delores To The Bay', user_id: demo.id, distance: 2140})
route4 = Route.create({ name: 'Bernal Blast', user_id: demo.id, distance: 2084})
route5 = Route.create({ name: 'Twin Peaks', user_id: demo.id, distance: 3175})
route6 = Route.create({ name: 'Forest Knolls Loop', user_id: demo.id, distance: 1481})
route7 = Route.create({ name: 'GG Park!', user_id: demo.id, distance: 2806})
route8 = Route.create({ name: 'Lands End Loop!', user_id: demo.id, distance: 2132})
route9 = Route.create({ name: 'Marina-front Tour!', user_id: demo.id, distance: 4313})
route10 = Route.create({ name: 'Kirby Cove-ing', user_id: demo.id, distance: 3367})
route11 = Route.create({ name: 'Hill To Hill', user_id: demo.id, distance: 5147})

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

wp16 = Waypoint.create({ lat: 37.761420, lng: -122.426730, route_id: route3.id, route_order: 1})
wp17 = Waypoint.create({ lat: 37.780485, lng: -122.388535, route_id: route3.id, route_order: 2})
wp18 = Waypoint.create({ lat: 37.806476, lng: -122.405642, route_id: route3.id, route_order: 3})


wp19 = Waypoint.create({ lat: 37.759965, lng: -122.412651, route_id: route4.id, route_order: 1})
wp20 = Waypoint.create({ lat: 37.743385, lng: -122.412165, route_id: route4.id, route_order: 2})

wp21 = Waypoint.create({ lat: 37.758127, lng: -122.426732, route_id: route5.id, route_order: 1})
wp22 = Waypoint.create({ lat: 37.756825, lng: -122.442099, route_id: route5.id, route_order: 2})
wp23 = Waypoint.create({ lat: 37.751752, lng: -122.448136, route_id: route5.id, route_order: 3})

wp24 = Waypoint.create({ lat: 37.761365, lng: -122.452401, route_id: route6.id, route_order: 1})
wp25 = Waypoint.create({ lat: 37.758127, lng: -122.459789, route_id: route6.id, route_order: 2})
wp26 = Waypoint.create({ lat: 37.755957, lng: -122.458565, route_id: route6.id, route_order: 3})

wp27 = Waypoint.create({ lat: 37.765468, lng: -122.483900, route_id: route7.id, route_order: 1})
wp28 = Waypoint.create({ lat: 37.770341, lng: -122.480353, route_id: route7.id, route_order: 2})
wp29 = Waypoint.create({ lat: 37.768505, lng: -122.499973, route_id: route7.id, route_order: 3})

wp30 = Waypoint.create({ lat: 37.776461, lng: -122.509840, route_id: route8.id, route_order: 1})
wp31 = Waypoint.create({ lat: 37.783253, lng: -122.511617, route_id: route8.id, route_order: 2})
wp32 = Waypoint.create({ lat: 37.787282, lng: -122.500758, route_id: route8.id, route_order: 3})

wp33 = Waypoint.create({ lat: 37.805206, lng: -122.432234, route_id: route9.id, route_order: 1})
wp34 = Waypoint.create({ lat: 37.805506, lng: -122.455101, route_id: route9.id, route_order: 2})
wp35 = Waypoint.create({ lat: 37.806916, lng: -122.469513, route_id: route9.id, route_order: 3})
wp36 = Waypoint.create({ lat: 37.810353, lng: -122.476407, route_id: route9.id, route_order: 4})

wp37 = Waypoint.create({ lat: 37.833513, lng: -122.478091, route_id: route10.id, route_order: 1})
wp38 = Waypoint.create({ lat: 37.829530, lng: -122.483780, route_id: route10.id, route_order: 2})
wp39 = Waypoint.create({ lat: 37.827063, lng: -122.489781, route_id: route10.id, route_order: 3})

wp40 = Waypoint.create({ lat: 37.839949, lng: -122.489269, route_id: route11.id, route_order: 1})
wp41 = Waypoint.create({ lat: 37.835874, lng: -122.489637, route_id: route11.id, route_order: 2})
wp42 = Waypoint.create({ lat: 37.827840, lng: -122.520118, route_id: route11.id, route_order: 3})

wo1 = Workout.create({ activity_type: "Running", description: "A lovely day to chase something", route_id: route6.id, time_elapsed: 20, user_id: demo.id})
wo2 = Workout.create({ activity_type: "Running", description: "We ran all night in persuit and there is further yet still to go.", route_id: route11.id, time_elapsed: 62, user_id: demo.id})
wo3 = Workout.create({ activity_type: "Running", description: "I was challenged me to a sprint, guess who won?!", route_id: route4.id, time_elapsed: 9, user_id: demo.id})
wo4 = Workout.create({ activity_type: "Hiking", description: "Walked to have dinner with the fellows! Can't say it wasn't a great time!", route_id: route10.id, time_elapsed: 45, user_id: demo.id})
wo5 = Workout.create({ activity_type: "Hiking", description: "A romantic hike with my main squeeze, A-bae", route_id: route8.id, time_elapsed: 43, user_id: demo.id})
wo6 = Workout.create({ activity_type: "Running", description: "Gotta stay in fighting shape!", route_id: route9.id, time_elapsed: 12, user_id: demo.id})
wo7 = Workout.create({ activity_type: "Cycling", description: "Back in the saddle! Its been a minute!", route_id: route2.id, time_elapsed: 23, user_id: demo.id})
wo8 = Workout.create({ activity_type: "Running", description: "Fun in the sun! I should spend more time at the beach after a run!", route_id: route1.id, time_elapsed: 59, user_id: demo.id})
wo9 = Workout.create({ activity_type: "Running", description: "Was that a foul voice or just Karl? Hard to tell these days. ;)", route_id: route5.id, time_elapsed: 52, user_id: demo.id})
wo10 = Workout.create({ activity_type: "Hiking", description: "Casual evening stroll!", route_id: route7.id, time_elapsed: 44, user_id: demo.id})
wo11 = Workout.create({ activity_type: "Running", description: "Greenleaf and I, the rematch (I still previaled)", route_id: route4.id, time_elapsed: 10, user_id: demo.id})
wo12 = Workout.create({ activity_type: "Running", description: "casual, easy, a good day to stretch the legs.", route_id: route3.id, time_elapsed: 68, user_id: demo.id})
