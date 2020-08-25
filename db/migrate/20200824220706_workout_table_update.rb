class WorkoutTableUpdate < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :average_pace 

    add_column :workouts, :average_pace, :integer
  end
end
