export const FETCH_TASKS = 'FETCH_TASKS'
export const fetchAllTasksAction = (tasks) => {
    return {
        type: FETCH_TASKS,
        payload: tasks
    }
}

export const FETCH_TODAY_TASKS = 'FETCH_TODAY_TASKS'
export const fetchTodayTasksAction = (todayTasks) => {
    return {
        type: FETCH_TODAY_TASKS,
        payload: todayTasks
    }
}

export const FETCH_COMING_TASKS = 'FETCH_COMING_TASKS'
export const fetchComingTasksAction = (comingTasks) => {
    return {
        type: FETCH_COMING_TASKS,
        payload: comingTasks
    }
}