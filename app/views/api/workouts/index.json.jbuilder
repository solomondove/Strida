json.workouts do 
    @workouts.each do |workout|
        json.set! workout.id do 
            json.partial! 'workout', workout: workout
        end 
    end 
end 

json.routes do 
    @routes.each do |route|
        json.set! route.id do 
            json.extract! route, :id, :name, :user_id, :waypoint_ids, :distance
        end 
    end 
end 