Rails.application.routes.draw do
  namespace :api do
    resources :sessions, only: [:create]
    resources :users, except: [:new, :edit]
    resources :tickets, except: [:new, :edit]
    resources :comments, only: [:create]
  end
end
