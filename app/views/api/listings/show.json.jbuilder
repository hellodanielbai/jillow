json.partial! "api/listings/listing", listing: @listing
json.photoUrls @post.photos.map { |file| url_for(file) }