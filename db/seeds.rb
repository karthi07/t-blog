# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  {
    username: 'Karthick',
    email: 'itkarthi02@gmail.com',
    password: 'testkarthi',
    password_confirmation: 'testkarthi'
  },
  {
    username: 'Test User1',
    email: 'test1@test.com',
    password: 'testtest',
    password_confirmation: 'testtest'
  }
])

posts = Post.create([
  {
    title: 'the first post',
    content: 'Sample post to test the application',
    user: users.first
  }
])