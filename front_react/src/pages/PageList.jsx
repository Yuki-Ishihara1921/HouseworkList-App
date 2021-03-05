import React from 'react'
import { TaskIndex } from '../components/tasks'

const PageList = () => {
    return (
        <section>
            <h5 className="p-3 bg-info text-white">タスク一覧</h5>
            <div className="listPage_container">
                <TaskIndex />
            </div>
        </section>
    )
}

export default PageList
