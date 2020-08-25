# == Schema Information
#
# Table name: routes
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  user_id     :integer          not null
#  distance    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#
class Route < ApplicationRecord
    validates :name, :distance, :user_id, presence: true 
    validates :name, uniqueness: {scope: :user, 
        message: "You can only have one route by that name."}

    belongs_to :user
    has_many :waypoints, dependent: :destroy 
    has_many :workouts

end
