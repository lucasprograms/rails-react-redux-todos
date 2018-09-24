class Api::StepsController < ApplicationController
  def index
    render json: Step.all
  end

  def create
    @step = Step.new(step_params)
    @step.todo_id = params[:todo_id]
    debugger

    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: :unproccesable_entity
    end
  end

  private

  def step_params
    params.require(:step).permit(:body)
  end
end
