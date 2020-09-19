class Gift < ApplicationRecord
    validates :description, presence: true
    validates :value, presence: true
    validates :event, presence: true
    validates :gift_giver, presence: true
end
