class AddStashReferences < ActiveRecord::Migration[5.0]
  def change
  	add_reference :snippet, :stash, index: true,  foreign_key: true
  end
end
