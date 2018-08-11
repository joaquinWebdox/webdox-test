# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

moderator = User.create(
  name: "Moderator",
  email: "moderator@gmail.com",
  password: 123456,
  password_confirmation: 123456,
  role: "moderator"
)

author = User.create(
  name: "Author",
  email: "author@gmail.com",
  password: 123456,
  password_confirmation: 123456,
  role: "author"
)

Ticket.create(
  title: "Test Ticket",
  description: "Lorem Ipsum",
  user_assigned_id: moderator.id,
  user_owned_id: author.id
)    

Ticket.create(
  title: "Second ticket",
  description: "Lorem Ipsum",
  user_assigned_id: moderator.id,
  user_owned_id: author.id
)    