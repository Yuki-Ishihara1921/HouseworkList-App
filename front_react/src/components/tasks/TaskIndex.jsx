import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTasks } from '../../reducks/tasks/operations'
import TaskBox from './TaskBox'
import { LoadSpinner } from '../UIkit'
import { Container, Row, Col } from 'react-bootstrap'

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
                                return (
                                    <Col md={6} key={task.id}>
                                        <TaskBox task={task} />
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
