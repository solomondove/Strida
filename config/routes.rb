Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :show] do 
      resources :routes, only: [:index]
    end 
    
    resource :session, only: [:create, :destroy]
    resources :routes, only: [:create, :show, :destroy, :show, :update]
    resources :waypoints, only: [:create, :show]
  end 

  root to: 'static_pages#root'
end
