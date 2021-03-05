import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonClick = (props) => {
    return (
        <Button
            className={props.className}
            variant={props.variant}
            onClick={props.onClick}
        >
            {props.label}
        </Button>
    )
}

export default ButtonClick
