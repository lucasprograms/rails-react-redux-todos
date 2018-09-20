10.times do
  Todo.create(
    body: Faker::Lorem.sentence,
    title: Faker::Lorem.sentence
  )
end

20.times do
  Step.create(
    body:Faker::Lorem.sentence,
    todo_id: Faker::Number.between(0, 9)
  )
end
