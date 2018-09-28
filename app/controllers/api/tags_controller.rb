class Api::TagsController < ApplicationController
  def create
    #TODO find_or_create_by, move logic to taggings controller
    @tag = Tag.find_or_create_by(name: tag_params['name'])
    @todo = Todo.find(params[:todo_id])

    if @todo.tags.include?(@tag)
      render json: ["Todo is already tagged with '#{@tag.name}'"], status: :precondition_failed
    else
      tagging = Tagging.create(todo_id: params[:todo_id], tag_id: @tag.id)
      render json: @tag
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end
end
