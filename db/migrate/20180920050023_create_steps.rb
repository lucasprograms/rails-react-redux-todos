class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :body, null: false
      t.boolean :done, null: false, default: false
      t.integer :todo_id, index: true, null: false
      t.timestamps
    end
  end
end
