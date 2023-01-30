# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "preparing to seed"

service1 = Service.create(service: "Interior Decor", location: "Kinjo Court", address: "Lenana Avenue, Off Abc Road", contact_info: "+254702123453", description: Faker::Lorem.sentence(word_count: rand(10..30)), client_id: 1)
service2 = Service.create(service: "Exterior Painting", location: "ABC Place", address: "Waiyaki way, Opp Safaricom", contact_info: "+254702123453", description: Faker::Lorem.sentence(word_count: rand(10..30)), client_id: 1)
service3 = Service.create(service: "Plumbing Work", location: "Muthangari Duplex", address: "Off Waiyaki way, Opp Safaricom", contact_info: "+254702123453", description: Faker::Lorem.sentence(word_count: rand(10..30)), client_id: 1)
service4 = Service.create(service: "Electrical Installation", location: "Riverside Park", address: "Riverside Park, opp Delta Centre", contact_info: "+254702123453", description: Faker::Lorem.sentence(word_count: rand(10..30)), client_id: 1)

puts "Seeding completed"
