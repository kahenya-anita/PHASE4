class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email
  # has_many :services
end
