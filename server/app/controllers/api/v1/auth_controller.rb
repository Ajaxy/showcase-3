class Api::V1::AuthController < Api::V1::ApplicationController
  acts_as_token_authentication_handler_for User, fallback: :exception, except: [:facebook]

  def info
    respond_with(as_api(current_user, :with_credentials_and_acl))
  end

  def facebook
    req = FbGraph2::User.new('me?fields=name,first_name,last_name,gender,friends').authenticate(params[:access_token])

    begin
      fb_user = req.fetch
    ensure
      unless defined?(fb_user) && fb_user.present?
        respond_with(error: 'Wrong token.')
        return
      end
    end

    user = User.find_or_create_for_facebook(fb_user.id, fb_user.name)

    unless user.present?
      respond_with(error: 'Auth failed. Try again.')
      return
    end

    sign_in(:user, user)

    info
  end
end
