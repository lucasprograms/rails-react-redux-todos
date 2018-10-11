@todos.each do |todo|
  json.set! todo.id do
    json.(todo, :id, :title, :body, :done, :created_at, :due_date, :user_id)
    json.steps do
      todo.steps.each do |step|
        json.set! step.id do
          json.(step, :id, :body)
        end
      end
    end
    json.tags todo.tags.each do |tag|
      json.(tag, :id, :name)
    end
  end
end

