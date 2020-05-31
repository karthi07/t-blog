Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json },
              path: '',
              path_names: {
                sign_in: 'login',
                sign_out: 'logout',
                registration: 'signup'
              },
              controllers: {
                sessions: 'sessions',
                registrations: 'registrations'
              }

  root 'tblog#index'

  namespace :api do
    namespace :v1 do
      resources :posts, param: :slug
      get '/my_post', to: 'posts#get_user_post'
    end
  end

  get '*path', to: 'tblog#index', via: :all
end
