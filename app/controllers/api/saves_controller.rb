class Api::SavesController < ApplicationController
    def index

    end

    def create
        @save = Save.new(save_params)
        if @save.save
            render :show
        else
            render json: @save.errors.full_messages, status: 422
        end
    end

    def destroy

    end

    private
    def save_params
        params.require(:saves).permit(:user_id, :listing_id)
    end
end
