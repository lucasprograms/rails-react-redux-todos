class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :title, null: false, index: true
      t.text :body, null: false
      t.boolean :done, null: false, default: false

      t.timestamps
    end
  end
end
