module ApplicationHelper
  def get_api_template(template = :default, prefix = :v1)
    { prefix: prefix, template: template }
  end

  def get_api_template_name(template = :default, prefix = :v1)
    get_api_template(template, prefix).values.join '_'
  end

  def as_api(resource, template = :default)
    return nil unless resource

    resource.as_api_response(get_api_template_name(template, :v1))
  end
end
