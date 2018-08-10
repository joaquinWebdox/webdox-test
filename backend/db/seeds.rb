# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.create(
  name: "Manuel Michelangelli",
  email: "manuel.mjmt@gmail.com",
  password: 123456,
  password_confirmation: 123456,
  role: "administrator"
)

moderator = User.create(
  name: "Test User",
  email: "test.user@gmail.com",
  password: 123456,
  password_confirmation: 123456,
  role: "moderator"
)

author = User.create(
  name: "Test User",
  email: "test.user@gmail.com",
  password: 123456,
  password_confirmation: 123456,
  role: "author"
)