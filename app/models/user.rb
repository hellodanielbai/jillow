class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password, length {minimum: 6} allow_nil: true
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    
    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        if @user && @user.is_password(password)
            @user
        else
            nil
        end
    end

    def password=(passowrd)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(password_digest)
        password_object.is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end
end
