json.extract! listing, :id, :address, :state, :city, :zipcode, :price, :sqft, :bd, :ba, :description, :lat, :lng, :is_rent
photoUrls = listing.photos.map do |photo|
    url_for(photo)
end
json.photoUrls photoUrls
