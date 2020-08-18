class ApplicationController < ActionController::Base
    protect_from_forgery 
    
    helper_method :current_user, :logged_in?
    
    def current_user 
        @current_user = User.find_by(session_token: session[:session_token])
    end 

    def login!(user)
        session[:session_token] = user.reset_session_token! 
    end 

    def logout
        @current_user.reset_session_token! 
        session[:session_token] = nil 
    end 

    def logged_in?
        !!current_user
    end 

end
