class Api::UsersController < ApplicationController
    
    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else 
            render json: @user.errors.full_messages, status: 401
        end 

    end 

    def show
        @user = User.find_by(email: params[:email])
        render 'api/users/show'
    end 

    private 
    def user_params 
        params.require(:user).permit(:id, :email, :password)
    end 
end
