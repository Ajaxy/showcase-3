CONFIG ||= {
}.with_indifferent_access.merge({
    production: {
        cors_origins: ''
    },

    development: {
        cors_origins: 'http://localhost:8080'
    }
}[Rails.env.to_sym])