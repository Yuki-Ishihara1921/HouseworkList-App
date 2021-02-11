import React from 'react'
import dateFormat from 'dateformat'
import { TasksToday, TasksComing } from '../components/tasks'

const PageTop = () => {
    const today = new Date()

    return (
        <>
            <section>
                <h5 className="p-3 bg-primary text-white">
                    今日のタスク
                    <span className="ms-auto"> ({dateFormat(today, 'mm / dd')}) </span>
                </h5>
                <div className="topPage__container">
                    <TasksToday />
                    <TasksComing />
                </div>
            </section>
        </>
    )
}

export default PageTop