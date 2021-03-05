import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodayTasks } from '../../reducks/tasks/operations'
import CompleteTaskButton from './CompleteTaskButton'
import { LoadSpinner } from '../UIkit'
import { getDateInformations } from '../../functions/datetime'
import dateFormat from 'dateformat'

const TasksToday = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const tasks = selector.todayTasks.list
    const isLoading = selector.loading.isTodayTasks

    useEffect(() => {
        dispatch(fetchTodayTasks())
    }, [])
    
    return (
        <section className="tasksToday">
            {isLoading ? (
                <LoadSpinner text={"データ取得中..."} />
            ) : (
                <>
                    {tasks.length ? (
                        <>
                            {tasks.map((task) => {
                                const infos = getDateInformations(task.do_at)
                                const now = infos.todayTime
                                const doAt = infos.doAtTime
                                return (
                                    <div className="tasksToday_content" key={task.id}>
                                        <div
                                            className={
                                                now > doAt ?
                                                'tasksToday_task border-expired' : 'tasksToday_task border-today'
                                            }
                                        >
                                            <span
                                                className={
                                                    now > doAt ?
                                                    'tasksToday_task-time bg-expired' : 'tasksToday_task-time bg-today'
                                                }
                                            >
                                                {dateFormat(task.do_at, 'HH:MM')}
                                            </span>
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
        </section>
    )
}

export default TasksToday
