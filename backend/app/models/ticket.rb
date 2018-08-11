class Ticket < ActiveRecord::Base

  belongs_to    :user_assigned,   class_name: "User",    foreign_key: "user_assigned_id"
  belongs_to    :user_owned,      class_name: "User",    foreign_key: "user_owned_id"
  has_many      :comments

end