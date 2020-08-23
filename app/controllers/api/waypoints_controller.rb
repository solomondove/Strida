class Api::WaypointsController < ApplicationController
    def create 
        @waypoint = Waypoint.new(waypoint_params)
        if @waypoint.save 
            render json: {}
        else 
            render json: @waypoint.errors.full_messages, status: 422
        end 
    end 

    def show
        @waypoint = Waypoint.find_by(id: params[:id])
        render :show
    end 

    private 
    def waypoint_params 
        params.require(:waypoint).permit(:id, :lat, :lng, :route_id, :route_order)
    end     

end
