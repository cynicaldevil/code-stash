Rails.application.routes.draw do
    resources :snippets

    get 'home/index'

    root 'home#index'
end
