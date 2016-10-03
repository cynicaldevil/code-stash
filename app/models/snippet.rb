class Snippet < ApplicationRecord
	belongs_to :stash
	has_many :comments, dependent: :destroy
	validates :title, presence: true
end
