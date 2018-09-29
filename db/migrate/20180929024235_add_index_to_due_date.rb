class AddIndexToDueDate < ActiveRecord::Migration[5.2]
  def change
    add_index :todos, :due_date
  end
end
