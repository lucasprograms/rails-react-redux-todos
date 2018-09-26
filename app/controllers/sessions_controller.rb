class SessionsController < ApplicationController
  before_action :redirect_if_logged_in, except: [:destroy]
  
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.nil?
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_url @user
    else
      login!(@user)
      redirect_to root_url
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end
end
