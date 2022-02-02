require "open-uri"

DemoUser = User.create({email: "demo", password: "password"})

Listing1 = Listing.create!({address: "Apple St", state: "CA", city: "Los Angeles", zipcode: 1234, price: 1000, sqft: 200, bd: 1, ba: 1.5, lat: 20, lng: 30, is_rent: true})
Listing1_pic1 = open('https://jillow-seed.s3.us-west-1.amazonaws.com/4a6e95852ae6bcab5602f776e5bbb205-cc_ft_576.webp')
Listing1.photos.attach(io: Listing1_pic1, filename: 'l1_p1')


Listing2 = Listing.create!({address: "Orange St", state: "CA", city: "Los Angeles", zipcode: 4321, price: 2000, sqft: 400, bd: 2, ba: 2, lat: 40, lng: 50, is_rent: true})
Listing2_pic1 = open('https://jillow-seed.s3.us-west-1.amazonaws.com/84fb6a3332eba242e885b2f519aad4e3-cc_ft_768.webp')
Listing2.photos.attach(io: Listing2_pic1, filename: 'l1_p2')

Listing3 = Listing.create!({address: "Grape St", state: "CA", city: "Los Angeles", zipcode: 5678, price: 3000, sqft: 600, bd: 3, ba: 3, lat: 80, lng: 100, is_rent: true})
Listing3_pic1 = open('https://jillow-seed.s3.us-west-1.amazonaws.com/b4687a05bb604824e332afce96a4d390-cc_ft_384.webp')
Listing3.photos.attach(io: Listing3_pic1, filename: 'l1_p3')



# jj = User.create( email: 'jj', password: 'password')
# file = open('https://jillow-seed.s3.us-west-1.amazonaws.com/dog.svg')
# jj.photo.attach(io: file, filename: 'dog.svg')