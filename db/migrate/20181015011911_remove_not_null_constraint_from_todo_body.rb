class RemoveNotNullConstraintFromTodoBody < ActiveRecord::Migration[5.2]
  def change
    change_column :todos, :body, :text, :null => true
  end
end
