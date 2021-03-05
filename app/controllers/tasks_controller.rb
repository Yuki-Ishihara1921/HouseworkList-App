class TasksController < ApplicationController
    include JwtAuthenticator
    before_action :set_current_user, only: [:index, :create, :today, :coming]
    before_action :set_task, only: [:show, :update, :destroy]
    before_action :task_params, only: [:create, :update]

    def index
        @tasks = Task.where(user_id: @current_user_id).order('do_at asc')
        render json: @tasks
    end

    def show
        render json: @task
    end

    def create
        @task = Task.new(task_params)
        @task.user = @current_user
        if @task.save
            render json: @task
        else
            render json: @task.errors, status: :unprocessable_entity
        end
    end

    def update
        if @task.update(task_params)
            render json: @task
        else
            render json: @task.errors, status: :unprocessable_entity
        end
    end

    def destroy
        if @task.destroy
            head :no_content
        else
            render json: @task.errors, status: :unprocessable_entity
        end
    end

    def today
        @tasks = Task.where("to_char(do_at, 'YYYY-MM-DD') LIKE ?", "%#{Date.today}%").where(user_id: @current_user_id).order('do_at asc')
        render json: @tasks
    end

    def coming
        from = Date.tomorrow
        to = (from + 3.days)
        @tasks = Task.where(user_id: @current_user_id, do_at: from..to).order('do_at asc')
        render json: @tasks
    end

    private
        def set_current_user
            decoded_token = decode(request.headers['Authorization'])
            @current_user_id = decoded_token['user_id']
            @current_user = User.find(@current_user_id)
        end

        def set_task
            @task = Task.find(params[:id])
        end

        def task_params
            params.permit(:name, :interval, :do_at)
        end
end
