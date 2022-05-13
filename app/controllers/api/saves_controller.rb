class Api::SavesController < ApplicationController
    def index
        @saves = Save.all
        render :index
    end

    def create
        @save = Save.new(save_params)
        @save.user_id = current_user.id
        if @save.save
            render :show
        else
            render json: @save.errors.full_messages, status: 422
        end
    end

    def show
        @save = Save.find(params[:id])
        render :show
    end

    def destroy
        @save = Save.find(params[:id])
        @save.destroy
        render :show
    end

    private
    def save_params
        params.require(:saves).permit(:user_id, :listing_id)
    end
end
