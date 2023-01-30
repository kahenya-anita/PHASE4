class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :service, :location, :address, :contact_info, :description, :client_id
  
  belongs_to :client

end
