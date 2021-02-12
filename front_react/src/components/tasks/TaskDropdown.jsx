import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../../reducks/tasks/operations'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { PencilSquare, TrashFill } from 'react-bootstrap-icons'
import TaskEdit from './TaskEdit'

const TaskDropdown = (props) => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <DropdownButton className="m-auto" id="taskDropdown" title="" menuAlign="right" size="sm" variant="secondary" >
                <Dropdown.Item className="text-center" onClick={() => setIsOpen(true)}>
                    <span><PencilSquare /> </span>
                    編集する
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="text-center" onClick={() => dispatch(deleteTask(props.id))}>
                    <span><TrashFill /> </span>
                    削除する
                </Dropdown.Item>
            </DropdownButton>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <TaskEdit id={props.id} label={"更新"} onClose={() => setIsOpen(false)} />
            </Modal>
        </>
    )
}

export default TaskDropdown
