Rails.application.routes.draw do
  resources :home_pages, only: [:show]

  root to: "home_pages#show"
end
