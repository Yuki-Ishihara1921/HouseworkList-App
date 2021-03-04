import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTasks } from '../../reducks/tasks/operations'
import { TaskDropdown } from './index'
import { LoadSpinner } from '../UIkit'
import { getDateInformations } from '../../functions/datetime'
import dateFormat from 'dateformat'
import { Container, Row, Col, Table } from 'react-bootstrap'

const TasksAll = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const tasks = selector.tasks.list
    const isLoading = selector.loading.isAllTasks

    useEffect(() => {
        dispatch(fetchAllTasks())
    }, [])

    return (
        <Container>
            {isLoading ? (
                <div className="w-100 text-center">
                    <LoadSpinner text={"データ取得中..."} />
                </div>
            ) : (
                <>
                    {tasks.length ? (
                        <Row>
                            {tasks.map((task) => {
                                const info = getDateInformations(task.do_at)
                                return (
                                    <Col md={6} key={task.id}>
                                        <div className={info.todayTime < info.doAtTime ? info.todayString !== info.doAtString ? 'listPage_content' : 'listPage_content border-today' : 'listPage_content border-expired'}>
                                            <section className="w-100">
                                                <div className="d-flex">
                                                    <h5 className="listPage_taskName">{task.name}</h5>
                                                    <TaskDropdown id={task.id} />
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
                                            </section>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    ) : (
                        <h3 className="mt-5 text-center text-warning">タスクを登録して下さい。</h3>
                    )}
                </>
            )}
        </Container>
    )
}

export default TasksAll
