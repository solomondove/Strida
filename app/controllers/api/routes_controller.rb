class Api::RoutesController < ApplicationController
    def create
        @route = Route.new(route_params)
        if @route.save
            waypoints = params[:route][:waypoints]
            waypoint_builder(waypoints, @route)
            render :show
        else 
            render json: @route.errors.full_messages, status: 400
        end 
    end 

    def destroy 
        @route = Route.find_by(id: params[:id])
        @route.delete
        render json: {}
    end 

    def update 
        old_route = Route.find_by(id: params[:id])
        old_route.delete
        @route = Route.new(route_params)
        if @route.save
            waypoints = params[:route][:waypoints]
            waypoint_builder(waypoints, @route)
            render :show
        else 
            render json @route.errors.full_messages, status: 422
        end 
    end 

    def show
        @route = Route.find_by(id: params[:id])
        render :show
    end 

    def index 
        @routes = User.find_by(id: params[:user_id]).routes 
        render :index 
    end 

    private
    def route_params 
        params.require(:route).permit(:id, :name, :user_id, :distance, :waypoints)
    end 

    def waypoint_builder(waypoints, route)
        waypoints.keys.each_with_index do |key, idx|
            new_map = {}
            new_map[:lat] = waypoints[key]["lat"].to_f
            new_map[:lng] = waypoints[key]["lng"].to_f
            new_map[:route_id] = route.id
            new_map[:route_order] = idx
            new_point = Waypoint.new(new_map)
            new_point.save
        end 
    end 
end
