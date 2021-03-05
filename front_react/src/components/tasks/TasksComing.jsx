import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComingTasks } from '../../reducks/tasks/operations'
import { LoadSpinner } from '../UIkit'
import dateFormat from 'dateformat'

const TasksComing = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const isLoading = selector.loading.isComingTasks
    const tasks = selector.comingTasks.list

    useEffect(() => {
        dispatch(fetchComingTasks())
    }, [])

    return (
        <section className="tasksComing">
            <h5 className="text-headline">近日のタスク</h5>
            {isLoading ? (
                <LoadSpinner text={"データ取得中..."} />
            ) : (
                <>
                    {tasks.length ? (
                        <>
                            {tasks.map((task) => {
                                return (
                                    <div className="tasksComing_content border-coming" key={task.id}>
                                        <span className="tasksComing_date">
                                            {dateFormat(task.do_at, 'mm / dd')}
                                        </span>
                                        <h5 className="m-auto p-2 fw-bold">
                                            {task.name}
                                        </h5>
                                    </div>
                                )
                            })}
                        </>
                    ) : (
                        <h3 className="p-3 text-center">No tasks</h3>
                    )}
                </>  
            )}
        </section>
    )
}

export default TasksComing
