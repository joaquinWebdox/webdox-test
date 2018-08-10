class ApplicationController < ActionController::API

  def current_user
    @current_user ||= User.find(payload['user_id'])
  end

  private

    def payload
      JWT.decode(get_token, Rails.application.secrets.secret_key_base, true, { algorithm: 'HS256' }).first
    end

    def get_token
      request.headers['Authorization'].split(' ').last
    end

end
