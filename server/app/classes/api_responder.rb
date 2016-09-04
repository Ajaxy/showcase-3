include ApplicationHelper

class ApiResponder < ActsAsApi::Responder
  attr_reader :api_template

  def initialize(controller, resources, options={})
    unless options.include? :api_template
      options[:api_template] = get_api_template
    end

    super controller, resources, options
  end

  def to_json
    as_json = api_template.nil? || !resource.respond_to?(:as_api_response) ?
        resource :
        resource.as_api_response(options[:api_template] || get_api_template_name)

    if as_json.is_a?(Hash) && as_json.key?(:error)
      render json: as_json
    else
      render json: { result: as_json }
    end
  end
end