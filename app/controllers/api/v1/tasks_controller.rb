class Api::V1::TasksController < ApplicationController
    before_action :find_task, only: [:show, :update, :destroy]

  # GET all Tasks
  def index
    @task = Task.all
    render json: @tasks
  end

  # GET /Tasks/:id
  def show
    render json: @task
  end

  # POST /Tasks
  def create
    @task = Task.new(Task_params)
    if @task.save
      render json: @task
    else
      render error: { error: "Unable to create Task" }, status: :bad_request
    end
  end

  # PUT /Tasks/:id
  def update
    @task = Task.find(params[:id])
    if @task
      @task.update(user_params)
      render json: { message: "Task sucessfully updated" }, status: :ok
    else
      render error: { error: "Unable to update Task" }, status: :bad_request
    end
  end

  # DELETE /Tasks/:id
  def destroy
    @task = Task.find(params[:id])
    if @task
      @task.destroy
      render json: { message: "Task successfully deleted" }, status: :ok
    else
      render error: { error: "Unadle to delete Task" }, status: :bad_request
    end
  end

  private

  def user_params
    params.require(:task)
  end

  def find_task
    @task = Task.find(params[:id])
  end
end
