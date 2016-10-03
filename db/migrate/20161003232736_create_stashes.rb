class CreateStashes < ActiveRecord::Migration[5.0]
  def change
    create_table :stashes do |t|
      t.string :name
      t.string :owner

      t.timestamps
    end
  end
end
