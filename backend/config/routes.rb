Rails.application.routes.draw do

  # Admin routes
  namespace :api do
    namespace :admin do
      resources :users, except: [:new, :edit]

      resources :tickets, except: [:new, :edit] do
        member { put :close }
      end
      resources :comments, only: [:create]
    end
  end

  # User routes
  namespace :api do
    post 'login' => 'sessions#create'
    delete 'logout' => 'sessions#destroy'

    resources :users, except: [:index, :new, :create, :edit, :update, :show, :destroy] do
      resources :tickets, except: [:new, :edit, :update, :destroy] do
        member { put :close }
        member { post :comment }
      end
    end
  end

end
