class SessionsController < ApplicationController
skip_before_action :authorize, only: [:create]

# Login Feature
    def create
        client = Client.find_by(username: params[:username])
        if client&.authenticate(params[:password])
            session[:client_id] = client.id 
            render json: client, status: :created
        else 
            render json: { errors: ["Incorrect username or password"]}, status: :unauthorized
        end
    end

# Logout Feature
    def destroy
        session.delete :client_id
        head :no_content
    end
end
