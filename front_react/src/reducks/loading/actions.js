export const SHOW_SIGNUP_LOADING = 'SHOW_SIGNUP_LOADING'
export const showSignUpLoadingAction = () => {
    return {
        type: SHOW_SIGNUP_LOADING,
        payload: {
            isSignUp: true
        }
    }
}

export const SHOW_SIGNIN_LOADING = 'SHOW_LOGIN_LOADING'
export const showSignInLoadingAction = () => {
    return {
        type: SHOW_SIGNIN_LOADING,
        payload: {
            isSignIn: true
        }
    }
}

export const SHOW_ALLTASKS_LOADING = 'SHOW_ALLTASKS_LOADING'
export const showAllTasksLoadingAction = () => {
    return {
        type: SHOW_ALLTASKS_LOADING,
        payload: {
            isAllTasks: true
        }
    }
}

export const SHOW_TODAYTASKS_LOADING = 'SET_TODAYTASKS_LOADING'
export const showTodayTasksLoadingAction = () => {
    return {
        type: SHOW_TODAYTASKS_LOADING,
        payload: {
            isTodayTasks: true
        }
    }
}

export const HIDE_TODAYTASKS_LOADING = 'HIDE_TODAYTASKS_LOADING'
export const hideTodayTasksLoadingAction = () => {
    return {
        type: HIDE_TODAYTASKS_LOADING,
        payload: {
            isTodayTasks: false
        }
    }
}

export const SHOW_COMINGTASKS_LOADING = 'SHOW_COMINGTASKS_LOADING'
export const showComingTasksLoadingAction = () => {
    return {
        type: SHOW_COMINGTASKS_LOADING,
        payload: {
            isComingTasks: true
        }
    }
}

export const HIDE_COMINGTASKS_LOADING = 'HIDE_COMINGTASKS_LOADING'
export const hideComingTasksLoadingAction = () => {
    return {
        type: HIDE_COMINGTASKS_LOADING,
        payload: {
            isComingTasks: false
        }
    }
}

export const HIDE_LOADING = 'HIDE_LOADING'
export const hideLoadingAction = () => {
    return {
        type: HIDE_LOADING,
        payload: {
            isSignUp: false,
            isSignIn: false,
            isAllTasks: false,
            isTodayTasks: false,
            isComingTasks: false,
        }
    }
}