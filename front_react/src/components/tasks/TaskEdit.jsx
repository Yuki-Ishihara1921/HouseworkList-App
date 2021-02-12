import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { saveTask } from '../../reducks/tasks/operations'
import { Form, FormControl, InputGroup } from 'react-bootstrap'
import { ButtonClick, TextInput } from '../UIkit'

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
                label={"● やること"} type={"text"} placeholder={"例：燃えるゴミ出し、リビング掃除等"}
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
            <div className="mt-4 text-center">
                <ButtonClick
                    className={"w-50"} label={props.label} variant={"success"}
                    onClick={() => dispatch(saveTask(props.id, name, interval, doAt, props.onClose))}
                />
            </div>
        </Form>
    )
}

export default TaskEdit
