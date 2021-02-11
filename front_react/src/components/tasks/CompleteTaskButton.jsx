import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { completeTask } from '../../reducks/tasks/operations'
import { Check } from 'react-bootstrap-icons'

const CompleteTaskButton = (props) => {
    const dispatch = useDispatch()
    
    return (
        <Button
            className="p-0 rounded-circle" variant="outline-success"
            onClick={() => dispatch(completeTask(props.task))}
        >
            <Check className="fs-1" />
        </Button>
    )
}

export default CompleteTaskButton
