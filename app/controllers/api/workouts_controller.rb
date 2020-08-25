class Api::WorkoutsController < ApplicationController

    def index 
        @workouts = User.find_by(id: params[:user_id]).workouts
        render :index 
    end 

    def show 
        @workout = Workout.find_by(id: params[:id])
        render :show
    end 

    def create
        @workout = Workout.new(workout_params)
        if @workout.save
            render :show
        else 
            render json: @workout.errors.full_messages, status: 400
        end 
    end 

    def update
        @workout = Workout.find_by(id: params[:id])
        if @workout.update(workout_params)
            render :show
        else 
            render json: @workout.errors.full_messages, status: 422
        end 
    end 

    def destroy 
        @workout = Workout.find_by(id: params[:id])
        @workout.delete
        debugger 
        render json: {}
    end 

    private 
    def workout_params 
        params.require(:workout).permit(:activity_type, :user_id, :time_elapsed, :average_pace, :description, :route_id)
    end 
end
