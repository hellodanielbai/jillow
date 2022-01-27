class RemoveColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :state
    remove_column :listings, :city
  end
end
