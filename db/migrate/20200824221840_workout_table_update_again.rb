class WorkoutTableUpdateAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :activity_type

    add_column :workouts, :activity_type, :string, null: false  
  end
end
