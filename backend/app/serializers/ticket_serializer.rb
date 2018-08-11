# == Schema Information
#
# Table name: tickets
#
#  id               :integer          not null, primary key
#  title            :string
#  description      :text
#  user_assigned_id :integer
#  user_owned_id    :integer
#  status           :string           default("open")
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class TicketSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user_assigned, :user_owned, :status, :comments
end
