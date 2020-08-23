class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :name, null: false 
      t.integer :user_id, null: false 
      t.integer :distance, null: false 
      t.timestamps
    end

    add_index :routes, :user_id
  end
end
