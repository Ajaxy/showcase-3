class Api::V1::JogsController < Api::V1::ApplicationController
  before_action :_find, only: [:show, :edit, :update, :destroy]
  before_filter :_check_access, only: [:edit, :update, :destroy]
  before_action :_permit_params, only: [:create, :update]

  def index
    jogs = current_user.jogs

    if params[:filter].present?
      jogs = jogs.where(date: (params[:filter][:date_from].to_date..params[:filter][:date_to].to_date))
    end

    respond_with(jogs: as_api(jogs))
  end

  def show
    respond_with(jog: as_api(@jog))
  end

  def new
    respond_with(ok: :ok)
  end

  def create
    jog = Jog.new(@jog_params)
    jog.user = current_user
    
    if jog.save
      respond_with(redirect: "/jogs/#{jog.id}")
    else
      respond_with(error: true, errors: jog.errors)
    end
  end

  def edit
    respond_with(jog: as_api(@jog))
  end

  def update
    if @jog.update_attributes(@jog_params)
      respond_with(redirect: "/jogs/#{@jog.id}")
    else
      respond_with(error: true, errors: @jog.errors)
    end
  end

  def destroy
    if @jog.destroy
      respond_with(redirect: '/jogs')
    else
      respond_with(error: true, errors: @jog.errors)
    end
  end

  private

  def _find
    @jog ||= Jog.find(params[:id])
  end

  def _check_access
    _find
    raise_error 403 unless current_user.can_manage_jog?(@jog)
  end

  def _permit_params
    @jog_params ||= params.require(:jog).permit([:date, :distance, :duration])
  end
end
