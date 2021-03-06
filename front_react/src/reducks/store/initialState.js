const initialState = {
    users: {
        isSignedIn: false,
        username: "",
        usertoken: ""
    },
    tasks: {
        list: []
    },
    todayTasks: {
        list: []
    },
    comingTasks: {
        list: []
    },
    loading: {
        isSignUp: false,
        isSignIn: false,
        isAllTasks: false,
        isTodayTasks: false,
        isComingTasks: false,
    }
}

export default initialState
