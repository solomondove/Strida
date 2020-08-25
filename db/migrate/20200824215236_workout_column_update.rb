class WorkoutColumnUpdate < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :descriptions
    remove_column :routes, :descriptions

    add_column :workouts, :description, :text
    add_column :routes, :description, :string
  end 
end
