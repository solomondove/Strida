# == Schema Information
#
# Table name: workouts
#
#  id            :bigint           not null, primary key
#  activity_type :integer          not null
#  user_id       :integer          not null
#  time_elapsed  :integer          not null
#  average_pace  :integer          not null
#  descriptions  :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  route_id      :integer
#
class Workout < ApplicationRecord
    validates :time_elapsed, :average_pace, :activity_type, :user_id, presence: true 

    belongs_to :user
    belongs_to :route, optional: true 
end
