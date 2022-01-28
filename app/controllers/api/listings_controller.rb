class Api::ListingsController < ApplicationController
    def index
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render "api/listings/show"
    end

    def create
        
        
    end

    def update

    end


    private
    def listing_params
        params.require(:listing).permit(:address, :state, :city, :zipcode, :price, :sqft, :bd, :ba, :lot_size, :description, :yr_built, :lat, :lng, :is_rent, photos: [])
    end
end
