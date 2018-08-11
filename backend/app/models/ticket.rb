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

class Ticket < ActiveRecord::Base

  belongs_to    :user_assigned,   class_name: "User",    foreign_key: "user_assigned_id"
  belongs_to    :user_owned,      class_name: "User",    foreign_key: "user_owned_id"
  has_many      :comments

  validates :title,         presence: true
  validates :description,   presence: true
  validates :status,        presence: true
  validates_inclusion_of    :status,    :in => ["open", "in_process", "closed"]

end
