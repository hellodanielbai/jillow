class Save < ApplicationRecord

    validates :user_id, :listing_id, presence: true
    validates :user_id, uniqueness: { scope: :listing_id}

    belongs_to :saver,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing
end
