Rails.application.routes.draw do
    resources :snippets do
        resources :comments
    end

    get 'home/index'

    root 'home#index'
end
