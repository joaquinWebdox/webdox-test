class TicketSerializer < ActiveModel::Serializer
  attributes :title, :description, :user_assigned, :user_owned, :status
end