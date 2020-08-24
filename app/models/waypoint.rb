# == Schema Information
#
# Table name: waypoints
#
#  id          :bigint           not null, primary key
#  lat         :float            not null
#  lng         :float            not null
#  route_id    :integer          not null
#  route_order :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Waypoint < ApplicationRecord
    validates :lat, :lng, :route_id, :route_order, presence: true 

    belongs_to :route, dependent: :destroy
end
