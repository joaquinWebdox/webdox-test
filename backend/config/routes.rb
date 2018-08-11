Rails.application.routes.draw do
  namespace :api do
    
    post 'login' => 'sessions#create'
    delete 'logout' => 'sessions#destroy'

    resources :users, except: [:new, :edit]
    resources :tickets, except: [:new, :edit] do
      member { put :close }
    end
    resources :comments, only: [:create]
  end
end
