Rails.application.routes.draw do
  root 'static_pages#root'
  
  namespace :api do
    resources :todos, except: [:new, :edit] do
      resources :steps, only: [:create]
    end

    resources :steps, only: [:update, :destroy, :index]
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
end
