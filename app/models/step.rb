class Step < ApplicationRecord
  validates :todo_id, :body, presence: true
  validates :done, inclusion: { in: [true, false] }

  belongs_to :todo
end
