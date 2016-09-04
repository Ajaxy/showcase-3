class Api::V1::ApplicationController < ApplicationController
  respond_to :json
  acts_as_token_authentication_handler_for User, fallback: :exception
  rescue_from StandardError, with: :_handle_error

  self.responder = ApiResponder

  private

  def _handle_error(exception)
    respond_with(error: exception.message)
  end
end
