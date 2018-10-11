Rails.application.routes.draw do
  root 'static_pages#root'
  
  namespace :api do
    resources :todos, defaults: { format: :json }, except: [:new, :edit] do
      resources :steps, only: [:create]
      resources :tags, only: [:create]
    end

    resources :steps, defaults: { format: :json }, only: [:update, :destroy, :index]
  end

  resources :taggings, only: [:create]
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
end
