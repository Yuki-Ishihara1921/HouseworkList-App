import * as Actions from './actions'
import initialState from '../store/initialState'

export const TasksReducer = (state = initialState.tasks, action) => {
    switch (action.type) {
        case (Actions.FETCH_TASKS):
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state
    }
}

export const TodayTasksReducer = (state = initialState.todayTasks, action) => {
    switch (action.type) {
        case (Actions.FETCH_TODAY_TASKS):
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state
    }
}

export const ComingTasksReducer = (state = initialState.comingTasks, action) => {
    switch (action.type) {
        case (Actions.FETCH_COMING_TASKS):
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state
    }
}