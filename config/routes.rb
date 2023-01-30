Rails.application.routes.draw do

  # login / signup / logout routes
  post "/signup", to: "clients#create"
  get "/me", to: "clients#show"

  resources :services


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end

