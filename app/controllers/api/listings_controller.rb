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
        render "api/listings/show"
    end

    def create
        @listing = Listing.new(listing_params)
        if @listing.save!
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    # def update

    # end

    # def applyFilters

    # end


    private
    def listing_params
        params.require(:listing).permit(:address, :state, :city, :zipcode, :price, :sqft, :bd, :ba, :lot_size, :description, :yr_built, :lat, :lng, :is_rent, photos: [])
    end
end
