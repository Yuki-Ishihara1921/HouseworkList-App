module JwtAuthenticator
    require 'jwt'

    SECRET_KEY_BASE = Rails.application.credentials.secret_key_base

    def encode(user_id)
        expires_in = 3.month.from_now.to_i
        payload = { user_id: user_id, exp: expires_in }
        JWT.encode(payload, SECRET_KEY_BASE, 'HS256')
    end

    def decode(encoded_token)
        decoded_jwt = JWT.decode(encoded_token, SECRET_KEY_BASE, true, { algorithm: 'HS256' })
        decoded_jwt.first
    end
end