class Api::ListingsController < ApplicationController
    def index
        if params[:userId]
            @user = User.find(params[:userId])
            @listings = @user.savedlistings
        else
            @listings = Listing.all
        end
        render :index
    end

    def show
        @listing = Listing.with_attached_photos.find(params[:id])
        if @listing 
            render "api/listings/show"
        else
            render json: ["Listing can't be found"], status: 422
        end
    end

    def create
        @listing = Listing.new(listing_params)
        if @listing.save!
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def update
        @listing = Listing.find_by(id: params[:id])
        if @listing && (current_user.id == @listing.userId)
            @listing.update(listing_params)
            render :show
        else
            render json: ["You can't update another user's listing"], status: 422
        end
    end

    def destroy
        @listing = Listing.find_by(id: params[:id])
        if @listing && (current_user.id == @listing.userId)
            @listing.destroy
        else
            render json: ["You can't delete another user's listing"], status: 422
        end
    end

    private
    def listing_params
        params.require(:listing).permit(:address, :state, :city, :zipcode, :price, :sqft, :bd, :ba, :lot_size, :description, :yr_built, :lat, :lng, :is_rent, photos: [])
    end
end
