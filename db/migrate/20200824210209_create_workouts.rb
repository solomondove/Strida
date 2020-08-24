class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :activity_type, null: false 
      t.integer :user_id, null: false 
      t.integer :time_elapsed, null: false 
      t.integer :average_pace, null: false 
      t.text :descriptions 
      t.timestamps
    end

    add_index :workouts, :user_id
    add_column :routes, :descriptions, :string
  end
end
