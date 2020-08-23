# == Schema Information
#
# Table name: routes
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  distance   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
