json.(@todo, :id, :title, :body, :done, :created_at, :user_id, :due_date, :updated_at)
json.steps @todo.steps
json.tags @todo.tags
