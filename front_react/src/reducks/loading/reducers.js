import * as Actions from './actions'
import initialState from '../store/initialState'

export const LoadingReducer = (state = initialState.loading, action) => {
    switch (action.type) {
        case Actions.SHOW_LOGIN_LOADING:
            return {
                ...state,
                ...action.payload
            }
        case Actions.SHOW_ALLTASKS_LOADING:
            return {
                ...state,
                ...action.payload
            }
        case Actions.SHOW_TODAYTASKS_LOADING:
            return {
                ...state,
                ...action.payload
            }
        case Actions.HIDE_TODAYTASKS_LOADING:
            return {
                ...state,
                ...action.payload
            }
        case Actions.SHOW_COMINGTASKS_LOADING:
            return {
                ...state,
                ...action.payload
            }
        case Actions.HIDE_COMINGTASKS_LOADING:
            return {
                ...state,
                ...action.payload
            }
        case Actions.HIDE_LOADING:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}