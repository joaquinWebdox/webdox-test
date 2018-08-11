class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many    :tickets_assigned,    class_name: "Ticket",    foreign_key: "user_assigned_id"
  has_many    :tickets_owned,       class_name: "Ticket",    foreign_key: "user_owned_id"
  has_many    :comments
  
end
