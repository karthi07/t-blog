class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :slug, :user_id
  attribute :creator do |object|
    object.user.username
  end

end
