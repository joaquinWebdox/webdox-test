class CommentSerializer < ActiveModel::Serializer
  attributes :user, :ticket, :content
end