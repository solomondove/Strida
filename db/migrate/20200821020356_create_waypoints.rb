class CreateWaypoints < ActiveRecord::Migration[5.2]
  def change
    create_table :waypoints do |t|
      t.float :lat, null: false 
      t.float :lng, null: false 
      t.integer :route_id, null: false
      t.integer :route_order, null: false 

      t.timestamps
    end

    add_index :waypoints, :route_id 
  end
end
