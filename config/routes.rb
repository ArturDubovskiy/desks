Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :desks do
        resources :tasks
      end
    end
  end
end
