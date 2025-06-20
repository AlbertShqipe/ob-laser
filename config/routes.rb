Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  get "macchinario_laser_808_1064" => "pages#macchinario_laser_808_1064"

  # get "test" => "pages#test"
  # Contact routes
  resources :contact, only: [:new, :create, :index, :destroy] do
    collection do
      post :send_email
    end
  end
  # Defines the root path route ("/")
  # root "posts#index"
end
