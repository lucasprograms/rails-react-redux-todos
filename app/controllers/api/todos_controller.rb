class Api::TodosController < ApplicationController
  before_action :redirect_if_not_logged_in

  def show
    render json: current_user.todos.find(params[:id]), include: :tags
  end

  def index
    render json: current_user.todos, include: :tags
  end

  def create
    @todo = current_user.todos.new(todo_params)

    if @todo.save
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @todo = current_user.todos.find(params[:id])

    if @todo.update_attributes(todo_params)
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @todo = current_user.todos.find(params[:id])
    @todo.destroy
    render json: @todo
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done, :due_date, tag_names: [])
  end
end
