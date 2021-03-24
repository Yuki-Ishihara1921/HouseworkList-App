import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../../reducks/tasks/operations'
import TaskEdit from './TaskEdit'
import Modal from 'react-modal'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { CheckCircle, PencilSquare, TrashFill } from 'react-bootstrap-icons'

const TaskDropdown = (props) => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <DropdownButton
                className="m-auto" id="taskDropdown" menuAlign="right"
                title="" size="sm" variant="secondary"
            >
                <Dropdown.Item className="text-center text-info" onClick={() => setIsOpen(true)}>
                    <span><PencilSquare /> </span>
                    編集
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="text-center text-success" onClick={() => dispatch(completeTask(props.task))}>
                    <span><CheckCircle /> </span>
                    更新
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="text-center text-danger" onClick={() => dispatch(deleteTask(props.task.id))}>
                    <span><TrashFill /> </span>
                    削除
                </Dropdown.Item>
            </DropdownButton>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <TaskEdit id={props.task.id} label={"更新"} onClose={() => setIsOpen(false)} />
            </Modal>
        </>
    )
}

export default TaskDropdown
