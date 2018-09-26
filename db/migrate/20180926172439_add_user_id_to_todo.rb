class AddUserIdToTodo < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :user_id, :integer, null: false, index: true
  end
end
