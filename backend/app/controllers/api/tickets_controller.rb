class Api::TicketsController < ApplicationController
  before_action    :set_ticket,    only: [:show, :update, :destroy]

  def index
    @tickets = Ticket.includes(:comments, :user_assigned, :user_owned)
    render json: @tickets
  end

  def show
    render json: @ticket
  end

  def create
    @ticket = Ticket.create(ticket_param)
    render json: @ticket
  end

  def update
    @ticket.update(ticket_param)
  end

  def destroy
    @ticket.destroy
  end

  private

    def ticket_param
      params.require(:ticket).permit(:title, :description, :status_id, :user_assigned, :user_owned)
    end

    def set_ticket
      @ticket = Ticket.find(params[:id])
    end

end