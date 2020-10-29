class Api::V1::DesksController < ApplicationController
  before_action :find_desk, only: [:show, :update, :destroy]

  # GET all desks
  def index
    @desks = Desk.all
    render json: @desks
  end

  # GET /desks/:id
  def show
    render json: @user
  end

  # POST /desks
  def create
    puts(desk_params)
    @desk = Desk.new(desk_params)
    if @desk.save
      render json: @desk
    else
      render error: { error: "Unable to create desk" }, status: :bad_request
    end
  end

  # PUT /desks/:id
  def update
    if @desk
      @desk.update(desk_params)
      render json: { message: "Desk sucessfully updated" }, status: :ok
    else
      render error: { error: "Unable to update Desk" }, status: :bad_request
    end
  end

  # DELETE /desks/:id
  def destroy
    if @desk
      @desk.destroy
      render json: { message: "Desk successfully deleted" }, status: :ok
    else
      render error: { error: "Unadle to delete Desk" }, status: :bad_request
    end
  end

  private

  def desk_params
    params.require(:desk).permit(:name)
  end

  def find_desk
    @desk = Desk.find(params[:id])
  end
end
