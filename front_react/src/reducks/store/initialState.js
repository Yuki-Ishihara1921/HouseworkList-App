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
        isLogin: false,
        isAllTasks: false,
        isTodayTasks: false,
        isComingTasks: false,
    }
}

export default initialState
