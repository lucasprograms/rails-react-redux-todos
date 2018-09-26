class Tagging < ApplicationRecord
  validates :todo_id, presence: true, uniqueness: { scope: :tag_id }
  validates :tag_id, presence: true

  belongs_to :tag
  belongs_to :todo
end
