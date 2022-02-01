# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


DemoUser = User.create({email: "demo", password: "password"})
DemoListing = Listing.create!({address: "Apple St", state: "CA", city: "Los Angeles", zipcode: 1234, price: 1000, sqft: 200, bd: 1, ba: 1.5, lat: 20, lng: 30, is_rent: true})
DemoListing2 = Listing.create!({address: "Orange St", state: "CA", city: "Los Angeles", zipcode: 4321, price: 2000, sqft: 400, bd: 2, ba: 2, lat: 40, lng: 50, is_rent: true})
DemoListing3 = Listing.create!({address: "Grape St", state: "CA", city: "Los Angeles", zipcode: 5678, price: 3000, sqft: 600, bd: 3, ba: 3, lat: 80, lng: 100, is_rent: true})


# jj = User.create( email: 'jj', password: 'password')
# file = open('https://jillow-seed.s3.us-west-1.amazonaws.com/dog.svg')
# jj.photo.attach(io: file, filename: 'dog.svg')