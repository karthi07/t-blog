Rails.application.routes.draw do
  devise_for :users
  root 'tblog#index'

  namespace :api do
    namespace :v1 do
      resources :posts, param: :slug
    end
  end

  get '*path', to: 'tblog#index', via: :all
end
