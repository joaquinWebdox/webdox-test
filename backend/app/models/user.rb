class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many    :assigned_tickets,    class_name: "Ticket"
  has_many    :owned_tickets,       class_name: "Ticket"
  has_many    :comments
  
end
