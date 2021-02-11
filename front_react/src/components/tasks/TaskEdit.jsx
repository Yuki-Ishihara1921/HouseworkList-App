import React, { useCallback, useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { TextInput } from '../UIkit'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { saveTask } from '../../reducks/tasks/operations'

const TaskEdit = (props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState(""),
          [interval, setInterval] = useState(1),
          [doAt, setDoAt] = useState("")
    
    const inputName = useCallback((e) => {
        setName(e.target.value)
    }, [setName])

    const inputInterval = useCallback((e) => {
        setInterval(e.target.value)
    }, [setInterval])

    const inputDoAt = useCallback((e) => {
        setDoAt(e.target.value)
    }, [setDoAt])

    const fetchTask = (task_id) => {
        axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/tasks/${task_id}`)
        .then(response => {
            const data = response.data
            setName(data.name)
            setInterval(data.interval)
            setDoAt(data.do_at)
        })
    }

    useEffect(() => {
        if (props.id) {
            fetchTask(props.id)
        }
    },[])

    return (
        <Form>
            <h4 className="text-headline">タスク編集</h4>
            <TextInput
                label={"● タスク名"} type={"text"}
                value={name} onChange={inputName}
            />
            <Form.Group className="mb-3">
                <Form.Label>● 実行頻度</Form.Label>
                <InputGroup style={{width: '50%'}}>
                    <FormControl
                        type="number" min="1" max="365"
                        value={interval} onChange={inputInterval}
                    />
                    <InputGroup.Append>
                        <InputGroup.Text>日</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </Form.Group>
            <TextInput
                label={"● 実行日"} type={"datetime-local"}
                value={doAt} onChange={inputDoAt}
            />
            <div className="text-center">
                <Button
                    variant="success"
                    onClick={() => dispatch(saveTask(props.id, name, interval, doAt, props.onClose))}
                >
                        {props.label}
                </Button>
            </div>
        </Form>
    )
}

export default TaskEdit
