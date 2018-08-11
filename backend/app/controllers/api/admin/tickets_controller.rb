class Api::Admin::TicketsController < ApplicationController
  before_action    :set_ticket,    only: [:update, :destroy, :close]

  def index
    @tickets = Ticket.includes(:user_assigned, :user_owned)
    render json: @tickets
  end

  def show
    @ticket = Ticket.includes(:comments, :user_assigned, :user_owned).where(id: params[:id]).first
    render json: @ticket
  end

  def create
    build_ticket

    if @ticket.save
      render json: @ticket
    else
      head(:unprocessable_entity)  
    end
  end

  def update
    if @ticket.update(ticket_params)
      render json: @ticket
    else
      head(:unprocessable_entity)  
    end
  end

  def destroy
    if @ticket.destroy
      head(:no_content)  
    else
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

  private

    def ticket_params
      params.require(:ticket).permit(:title, :description, :user_assigned, :user_owned, :status)
    end

    def set_ticket
      @ticket = Ticket.includes(:comments, :user_assigned, :user_owned).where(id: params[:id]).first
    end

    def build_ticket
      @ticket ||= Ticket.new

      @ticket.title         = ticket_params[:title]
      @ticket.description   = ticket_params[:description]
      @ticket.user_assigned = User.find(ticket_params[:user_assigned])
      @ticket.user_owned    = User.find(ticket_params[:user_owned])
      @ticket.status        = ticket_params[:status]
    end

end