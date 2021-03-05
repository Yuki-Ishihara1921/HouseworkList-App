import React from 'react'
import { Form, FormControl, InputGroup } from 'react-bootstrap'

const TextInput = (props) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{props.label}</Form.Label>
            <InputGroup>
                {props.icon && (
                    <InputGroup.Prepend className="me-2 my-auto">
                        <InputGroup.Text>{props.icon}</InputGroup.Text>                
                    </InputGroup.Prepend>
                )}
                <FormControl
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            </InputGroup>
        </Form.Group>
    )
}

export default TextInput
