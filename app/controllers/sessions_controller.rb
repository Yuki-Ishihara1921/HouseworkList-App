class SessionsController < ApplicationController
    include JwtAuthenticator
    def create
        @current_user = User.find_by(email: params[:email])
        if @current_user && @current_user.authenticate(params[:password])
            encoded_token = encode(@current_user.id)
            render json: { username: @current_user.name, useremail: @current_user.email, usertoken: encoded_token }
        else
            render status: :unauthorized
        end
    end
end
