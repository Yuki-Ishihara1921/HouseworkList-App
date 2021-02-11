class UsersController < ApplicationController
    include JwtAuthenticator
    
    def create
        @user = User.new(user_params)
        puts @user
        if @user.save
            encoded_token = encode(@user.id)
            render json: { username: @user.name, usertoken: encoded_token }
        else
            render status: :unauthorized
        end
    end

    private
        def user_params
            params.permit(:name, :email, :password, :password_confirmation)
        end
end
