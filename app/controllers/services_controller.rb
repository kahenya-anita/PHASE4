class ServicesController < ApplicationController

  def index
    services = @current_user.services.all
    if services
      render json: services, status: :ok
    else
      render json: {error: "No services found"}, status: :not_found
    end
  end


  def show
    service = find_service
    if service
      render json: service, status: :ok
    else
      render json: {error: "Service not found"}, status: :not_found
    end
  end


  def create
    service = @current_user.services.create(service_params)
    if service.valid?
      render json: service, status: :created
    else
      render json: [error: "validation errors"], status: :unprocessable_entity
    end
  end


  def update
    service = find_service
    if service
      service.update(service_params)
      if service.valid?
        render json: service, status: :created
      else
        render json: {error: "validation errors"},status: :unprocessable_entity
      end
    else
      render json: {error: "Service not found"},status: :not_found
    end
  end


  def destroy
    service = find_service
    if service
      service.destroy
      head :no_content
    else
      render json: {error: "service not found"}, status: :not_found
    end
  end


  private

  def service_params
    params.permit(:service, :location, :address, :contact_info, :description)
  end

  def find_service
    Service.find_by(id: params[:id])
  end
end
