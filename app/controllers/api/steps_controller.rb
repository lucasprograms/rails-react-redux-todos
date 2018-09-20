class Api::StepsController < ApplicationController
  def index
    render json: Step.all
  end
end
