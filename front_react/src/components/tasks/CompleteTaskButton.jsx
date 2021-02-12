import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { completeTask } from '../../reducks/tasks/operations'
import { Check } from 'react-bootstrap-icons'
import { ClickButton } from '../UIkit'

const CompleteTaskButton = (props) => {
    const dispatch = useDispatch()
    
    return (
        <ClickButton
            className={"p-0 rounded-circle"} label={<Check className="fs-1" />}
            variant={"outline-success"} onClick={() => dispatch(completeTask(props.task))}
        />
    )
}

export default CompleteTaskButton
