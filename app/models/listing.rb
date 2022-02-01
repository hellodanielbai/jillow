class Listing < ApplicationRecord
    validates :address, :state, :city, :zipcode, :price, :sqft, :bd, :ba, :lat, :lng, :is_rent, presence: true
    validates :is_rent, inclusion: { in: [true, false] }

    has_many_attached :photos
    
    has_many :saves,
        foreign_key: :listing_id,
        class_name: :Save
    
    has_many :savers,
        through: :saves,
        source: :saver
end