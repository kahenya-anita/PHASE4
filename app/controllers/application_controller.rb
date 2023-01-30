class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_error

  before_action :authorize


  private

  def authorize
    @current_user = Client.find_by(id: session[:client_id])
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless @current_user
  end

  def unprocessable_entity_error(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end
end
