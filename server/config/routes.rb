Rails.application.routes.draw do
  namespace :api do
    namespace :v1, defaults: { format: :json } do
      controller :auth do
        get 'auth/info'
        get 'auth/facebook'
      end

      resources :jogs do
        get 'progress', on: :collection
      end

      resources :users do
        get 'jogs', on: :member
      end
    end
  end

  devise_for :user
end
