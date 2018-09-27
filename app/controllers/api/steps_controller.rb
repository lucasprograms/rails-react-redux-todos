class Api::StepsController < ApplicationController
  def index
    render json: Step.all
  end

  def create
    @step = Step.new(step_params)
    @step.todo_id = params[:todo_id]

    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @step = Step.find(params[:id])

    if @step.update_attributes(step_params)
      render json: @step
    else
      render json: @step.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy
    render json: @step
  end


  private

  def step_params
    params.require(:step).permit(:body, :done)
  end
end
