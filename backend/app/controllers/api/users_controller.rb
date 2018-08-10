class Api::UsersController < ApplicationController
  before_action    :set_user,    only: [:show, :update, :destroy]

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)
      
      if @user.save
        render :create
      else
        head(:unprocessable_entity)
      end
  end

  def update
    @user.update(user_params)
  end

  def destroy
    @user.destroy
  end

  private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation, :name, :role)
    end

    def set_user
      @user = User.find(params[:id])
    end

end