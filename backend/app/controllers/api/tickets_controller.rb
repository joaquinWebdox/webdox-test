class Api::TicketsController < ApplicationController
  before_action    :set_user,      only: [:index, :show, :create, :close, :comment]
  before_action    :set_ticket,    only: [:close, :comment]

  def index
    @tickets = @user.tickets_owned
    render json: @tickets
  end

  def show
    @ticket = @user.tickets_owned.includes(:comments, :user_assigned, :user_owned).where(id: params[:id]).first
    render json: @ticket
  end

  def create
    build_ticket

    if @ticket.save
      render json: @ticket
    else
      puts @ticket.errors.inspect
      head(:unprocessable_entity)  
    end
  end

  def close
    if @ticket.update(status: "closed")
      render json: @ticket
    else
      head(:unprocessable_entity)  
    end
  end

  def comment
    @comment = @ticket.comments.build(comment_params)
    
    if @comment.save
      render json: @comment
    else
      head(:unprocessable_entity)  
    end
  end

  private

    def ticket_params
      params.require(:ticket).permit(:title, :description, :status_id, :user_assigned, :user_owned)
    end
    

    def set_user
      @user = User.find(params[:user_id])
    end

    def set_ticket
      @ticket = @user.tickets_owned.where("tickets.id = ?", params[:id]).first
    end

    def build_ticket
      @ticket = @user.tickets_owned.build

      @ticket.title         = ticket_params[:title]
      @ticket.description   = ticket_params[:description]
      @ticket.user_assigned = User.find(ticket_params[:user_assigned])
      @ticket.user_owned    = User.find(ticket_params[:user_owned])
    end

    def comment_params
      params.require(:comment).permit(:user_id, :ticket_id, :content)
    end

end