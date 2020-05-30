class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :slug, :user_id
end
