class Api::TagsController < ApplicationController
  def create
    @tag = Tag.find_by(name: tag_params['name'])

    if @tag.nil?
      @tag = Tag.create(tag_params)
      tagging = Tagging.create(todo_id: params[:todo_id], tag_id: @tag.id)
      render json: @tag
    else
      todo = Todo.find(params[:todo_id])

      if todo.tags.include?(@tag)
        render json: ["Todo is already tagged with '#{@tag.name}'"], status: :precondition_failed
      else
        tagging = Tagging.create(todo_id: params[:todo_id], tag_id: @tag.id)
        render json: @tag
      end
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end
end
