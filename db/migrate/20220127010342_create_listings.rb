class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :address, null: false
      t.string :state, null: false
      t.string :city, null: false
      t.integer :zipcode, null: false
      t.integer :price, null: false
      t.integer :sqft, null: false
      t.float :bd, null: false
      t.float :ba, null: false
      t.float :lot_size
      t.text :description
      t.integer :yr_built
      t.float :lat, null: false
      t.float :lng, null: false
      t.boolean :is_rent, default: true, null: false
      t.timestamps
    end
    
    add_index :listings, :id
  end
end
