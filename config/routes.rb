Rails.application.routes.draw do
  scope '/api' do
    post '/users', to: 'users#create'
    post '/sessions', to: 'sessions#create'
    resources :tasks, only: [:index, :show, :create, :update, :destroy]
    get '/todaytasks', to: 'tasks#today'
    get '/comingtasks', to: 'tasks#coming'
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
