class Ticket < ActiveRecord::Base

  belongs_to    :user_assigned,   class_name: "User",    foreign_key: "user_assigned"
  belongs_to    :user_owned,      class_name: "User",    foreign_key: "user_owned"
  has_many      :comments

end