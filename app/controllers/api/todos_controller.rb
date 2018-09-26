class Api::TodosController < ApplicationController
  def show
    render json: Todo.find(params[:id]), include: :tags
  end

  def index
    render json: Todo.all, include: :tags
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: :unproccesable_entity
    end
  end

  def update
    @todo = Todo.find(params[:id])

    if @todo.update_attributes(todo_params)
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: :unproccesable_entity
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render json: @todo
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done, tag_names: [])
  end
end
