class AddDueDateToTodo < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :due_date, :date
  end
end
