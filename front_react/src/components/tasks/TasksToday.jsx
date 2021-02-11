import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dateFormat from 'dateformat'
import { LoadSpinner } from '../UIkit'
import { CompleteTaskButton } from '../tasks'
import { fetchTodayTasks } from '../../reducks/tasks/operations'

const TasksToday = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const tasks = selector.todayTasks.list
    const isLoading = selector.loading.isTodayTasks

    useEffect(() => {
        dispatch(fetchTodayTasks())
    }, [])
    
    return (
        <div className="tasksToday">
            {isLoading ? (
                <LoadSpinner />
            ) : (
                <>
                    {tasks.length ? (
                        <>
                            {tasks.map((task) => {
                                const now = new Date().getTime()
                                const taskDoAt = new Date(task.do_at).getTime()
                                return (
                                    <div className="tasksToday_content" key={task.id}>
                                        <div className={now > taskDoAt ? 'tasksToday_task border-expired' : 'tasksToday_task border-today'}>
                                            <span className={now > taskDoAt ? 'tasksToday_task-time bg-expired' : 'tasksToday_task-time bg-today'}>{dateFormat(task.do_at, 'HH:MM')}</span>
                                            <h5 className="m-auto py-2 fw-bold">{task.name}</h5>
                                        </div>
                                        <div className="my-auto ps-3">
                                            <CompleteTaskButton task={task} />
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    ) : (
                        <h3 className="p-3">No tasks</h3>
                    )}
                </>
            )}
        </div>
    )
}

export default TasksToday
