class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment
    else
      head(:unprocessable_entity)  
    end
  end

  private

    def comment_params
      params.require(:comment).permit(:user_id, :ticket_id, :content)
    end

end