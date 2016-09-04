class ApplicationController < ActionController::Base
  def raise_error(error=500)
    messages = {
        '404': 'Not found',
        '401': 'Unauthorized',
        '403': 'Access denied',
        '500': 'Internal server error'
    }.with_indifferent_access

    if error.is_a?(Integer) && messages.has_key?(error.to_s)
      error = "#{error}: #{messages[error.to_s]}"
    end

    raise ActionController::ActionControllerError.new(error)
  end
end
