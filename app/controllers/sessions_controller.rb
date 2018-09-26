class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user.nil?
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_url @user
    else
      login!(@user)
      redirect_to root_url
    end
  end
end
