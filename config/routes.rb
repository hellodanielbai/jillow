Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :create, :show, :update, :destroy ]
    resources :listings, only: [ :index, :show, :create, :update, :destroy ]
    resources :saves, only: [ :index, :create, :destroy ]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end

