class Api::SessionsController < ApplicationController

  def create
    @user = User.where(email: params[:email]).first

    if @user.valid_password?(params[:password])
      jwt = JWT.encode(
        {user_id: @user.id, exp: (Time.now + 2.hours).to_i},
        Rails.application.secrets.secret_key_base,
        'HS256'
      )

      render json: { token: jwt }, status: :created
    else
      head(:unauthorized)
    end
  end

  def destroy
    # clear current user
    # expire jwt
  end
end