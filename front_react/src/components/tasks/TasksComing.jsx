import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dateFormat from 'dateformat'
import { LoadSpinner } from '../UIkit'
import { fetchComingTasks } from '../../reducks/tasks/operations'

const TasksComing = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const tasks = selector.comingTasks.list
    const isLoading = selector.loading.isComingTasks

    useEffect(() => {
        dispatch(fetchComingTasks())
    }, [])

    return (
        <div className="tasksComing">
            <h5 className="text-headline">近日のタスク</h5>
            {isLoading ? (
                <LoadSpinner />
            ) : (
                <>
                    {tasks.length ? (
                        <>
                            {tasks.map((task) => {
                                return (
                                    <div className="tasksComing_content border-coming" key={task.id}>
                                        <span className="tasksComing_date">{dateFormat(task.do_at, 'mm / dd')}</span>
                                        <h5 className="m-auto px-0 py-1 fw-bold">{task.name}</h5>
                                    </div>
                                )
                            })}
                        </>
                    ) : (
                        <h3 className="p-3 text-center">No tasks</h3>
                    )}
                </>  
            )}
        </div>
    )
}

export default TasksComing