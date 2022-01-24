class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session[:session_token])
    end

    def require_logged_in
        unless logged_in?
            redirect_to new_session_url
        end
    end

    def require_logged_out
        if logged_in?
            redirect_to users_url
        end
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        if logged_in?
            current_user.session_token.reset_session_token!
        end
        session[:session_token] = nil
        @current_user = nil
    end
end
