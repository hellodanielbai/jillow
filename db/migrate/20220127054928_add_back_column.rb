class AddBackColumn < ActiveRecord::Migration[5.2]
  def change
      add_column :listings, :state, :string, null: false
      add_column :listings, :city, :string, null: false
  end
end
