# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


DemoUser = User.create(email: "demo", password: "password")

# jj = User.create( email: 'jj', password: 'password')
# file = open('https://jillow-seed.s3.us-west-1.amazonaws.com/dog.svg')
# jj.photo.attach(io: file, filename: 'dog.svg')