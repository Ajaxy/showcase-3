class Api::V1::UsersController < Api::V1::ApplicationController
  before_action :_check_access
  before_filter :_find, only: [:show, :update, :destroy, :jogs]
  before_action :_permit_params, only: [:update]

  def index
    respond_with(users: as_api(User.all))
  end

  def edit
    respond_with(user: as_api(@user))
  end

  def update
    if @user.update_attributes(@user_params)
      respond_with(redirect: '/users')
    else
      respond_with(error: true, errors: @user.errors)
    end
  end

  def destroy
    if @user.destroy
      respond_with(redirect: '/users')
    else
      respond_with(error: true, errors: @user.errors)
    end
  end

  def jogs
    jogs = @user.jogs

    if params[:filter].present?
      jogs = jogs.where(date: (params[:filter][:date_from].to_date..params[:filter][:date_to].to_date))
    end

    respond_with(jogs: as_api(jogs), manageable: current_user.admin?)
  end

  private

  def _find
    @user ||= User.find(params[:id])
  end

  def _check_access
    _find if params[:id]
    raise_error 403 unless current_user.can_manage_user?(@user)
  end

  def _permit_params
    @user_params ||= params.require(:user).permit([:name, :email, :role])
  end
end
