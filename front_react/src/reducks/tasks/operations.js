import axios from 'axios'
import { push } from 'connected-react-router'
import {
    showAllTasksLoadingAction, hideLoadingAction,
    showTodayTasksLoadingAction, hideTodayTasksLoadingAction,
    showComingTasksLoadingAction, hideComingTasksLoadingAction
} from '../loading/actions'
import { fetchComingTasksAction, fetchAllTasksAction, fetchTodayTasksAction } from './actions'

export const fetchAllTasks = () => {
    return async (dispatch, getState) => {
        dispatch(showAllTasksLoadingAction())
        const usertoken = getState().users.usertoken
        axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/tasks`, {
            headers: { 'Authorization': usertoken }
        })
        .then(response => {
            dispatch(fetchAllTasksAction(response.data))
            dispatch(hideLoadingAction())
        })
    }
}

export const fetchTodayTasks = () => {
    return async (dispatch, getState) => {
        dispatch(showTodayTasksLoadingAction())
        const usertoken = getState().users.usertoken
        axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/todaytasks`, {
            headers: { 'Authorization': usertoken }
        })
        .then(response => {
            dispatch(fetchTodayTasksAction(response.data))
            dispatch(hideTodayTasksLoadingAction())
        })
        .catch(() => {
            dispatch(push('/'))
        })
    }
}

export const fetchComingTasks = () => {
    return async (dispatch, getState) => {
        dispatch(showComingTasksLoadingAction())
        const usertoken = getState().users.usertoken
        axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/comingtasks`, {
            headers: { 'Authorization': usertoken }
        })
        .then(response => {
            dispatch(fetchComingTasksAction(response.data))
            dispatch(hideComingTasksLoadingAction())
        })
    }
}

export const saveTask = (task_id, name, interval, doAt, onCloseModal) => {
    return async (dispatch, getState) => {
        if (name === "" || interval === "" || doAt === "") {
            alert("未入力の項目があります。")
            return false
        } else {
            const res = window.confirm("こちらの内容で保存しますか？")
            if (!res) {
                return false
            } else {
                const editTask = {
                    name: name,
                    interval: interval,
                    do_at: doAt
                }
                if (task_id) {
                    axios
                    .put(`${process.env.REACT_APP_SERVER_URL}/api/tasks/${task_id}`, editTask)
                    .then(() => {
                        dispatch(fetchAllTasks())
                    })
                } else {
                    const usertoken = getState().users.usertoken
                    axios
                    .post(`${process.env.REACT_APP_SERVER_URL}/api/tasks`, editTask, {
                        headers: { 'Authorization': usertoken }
                    })
                    .then(() => {
                        dispatch(fetchAllTasks())
                        dispatch(fetchTodayTasks())
                        dispatch(fetchComingTasks())
                        onCloseModal()
                    })
                }
            }
        }
    }
}

export const completeTask = (task) => {
    return async (dispatch) => {
        const doAt = new Date(task.do_at)
        const newDate = doAt.getDate() + task.interval
        const newDoAt = {do_at: new Date(doAt.setDate(newDate))}
        axios
        .put(`${process.env.REACT_APP_SERVER_URL}/api/tasks/${task.id}`, newDoAt)
        .then(() => {
            dispatch(fetchTodayTasks())
            dispatch(fetchComingTasks())
        })
    }
}

export const deleteTask = (task_id) => {
    return async (dispatch) => {
        const res = window.confirm("こちらのタスクを削除しますか？")
        if (!res) {
            return false
        } else {
            axios
            .delete(`${process.env.REACT_APP_SERVER_URL}/api/tasks/${task_id}`)
            .then(() => {
                dispatch(fetchAllTasks())
            })
        }
    }
}