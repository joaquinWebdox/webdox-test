class TicketSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user_assigned, :user_owned, :status
end