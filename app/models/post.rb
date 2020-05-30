class Post < ApplicationRecord
  belongs_to :user

  before_create :slugify

  def slugify
    self.slug = title.parameterize
  end
end
