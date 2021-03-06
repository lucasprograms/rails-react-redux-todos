3.times do
  User.create(
    username: Faker::LordOfTheRings.character.split(' ').map(&:capitalize).join(''),
    password: 'catcat'
  )
end

10.times do
  Todo.create(
    body: Faker::Lorem.sentence,
    title: Faker::Lorem.sentence,
    user_id: rand(3) + 1
  )
end

15.times do
  Step.create(
    body:Faker::Lorem.sentence,
    todo_id: Faker::Number.between(0, 9)
  )
end

5.times do
  Tag.create(
    name: Faker::Job.unique.key_skill
  )
end

5.times do
  Tag.create(
    name: Faker::RockBand.unique.name
  )
end

taggings = []

def createTaggingForeignKeys
  [rand(5) + 1, rand(10) + 1]
end

15.times do
  tagging = createTaggingForeignKeys
  while taggings.include? tagging do
    tagging = createTaggingForeignKeys
  end

  taggings << tagging

  Tagging.create(
    todo_id: tagging[0],
    tag_id: tagging[1]
  )
end
