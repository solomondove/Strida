# == Schema Information
#
# Table name: workouts
#
#  id            :bigint           not null, primary key
#  activity_type :integer          not null
#  user_id       :integer          not null
#  time_elapsed  :integer          not null
#  average_pace  :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  route_id      :integer
#  description   :text
#
class Workout < ApplicationRecord
    validates :time_elapsed, :user_id, presence: true 

    belongs_to :user
    belongs_to :route, optional: true 
end
