import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { UsersReducer } from '../users/reducers'
import { TasksReducer, TodayTasksReducer, ComingTasksReducer } from '../tasks/reducers'
import { LoadingReducer } from '../loading/reducers'

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            users: UsersReducer,
            tasks: TasksReducer,
            todayTasks: TodayTasksReducer,
            comingTasks: ComingTasksReducer,
            loading: LoadingReducer,
            router: connectRouter(history)
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}