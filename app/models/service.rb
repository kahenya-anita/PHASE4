class Service < ApplicationRecord
  belongs_to :client
  
  validates :contact_info, {
    presence: true,
    length: {in: 10..13}
  }
end
