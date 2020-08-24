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
require 'test_helper'

class WorkoutTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
