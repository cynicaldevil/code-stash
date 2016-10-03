class Stash < ApplicationRecord
	has_many :snippets, dependent: :destroy
end
