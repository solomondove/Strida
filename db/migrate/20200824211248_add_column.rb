class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :route_id, :integer 
  end
end
