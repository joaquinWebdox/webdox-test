class CommentSerializer < ActiveModel::Serializer
  attributes :user, :ticket_id, :content
end