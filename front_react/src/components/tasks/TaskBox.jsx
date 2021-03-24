import React from 'react'
import TaskDropdown from './TaskDropdown'
import { getDateInformations } from '../../functions/datetime'
import dateFormat from 'dateformat'
import { Table } from 'react-bootstrap'

const TaskBox = (props) => {
    const task = props.task
    const infos = getDateInformations(task.do_at)

    return (
        <section
            className={
                infos.todayTime < infos.doAtTime ? infos.todayString !== infos.doAtString ?
                'listPage_content' : 'listPage_content border-today' : 'listPage_content border-expired'
            }
        >
            <div className="w-100">
                <div className="d-flex">
                    <h5 className="listPage_taskName">{task.name}</h5>
                    <TaskDropdown task={task} />
                </div>
                <Table className="m-0 mt-3" bordered size="sm" striped>
                    <tbody>
                        <tr>
                            <th>実行日</th>
                            <td className="text-primary">{dateFormat(task.do_at, "mm/dd(ddd) HH:MM")}</td>
                        </tr>
                        <tr>
                            <th>頻度</th>
                            <td>{task.interval} 日</td>
                        </tr>
                        <tr>
                            <th>更新日</th>
                            <td>{dateFormat(task.updated_at, "mm/dd(ddd) HH:MM")}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </section>
    )
}

export default TaskBox
