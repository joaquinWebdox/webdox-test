# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  ticket_id  :integer
#  content    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base

  belongs_to    :user
  belongs_to    :ticket

  validates     :content,     presence: true

end
