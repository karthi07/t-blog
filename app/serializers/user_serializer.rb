class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :id, :email, :created_at
  
  has_many :posts
end
