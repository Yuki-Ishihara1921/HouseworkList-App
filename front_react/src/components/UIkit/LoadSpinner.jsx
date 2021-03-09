import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadSpinner = (props) => {
    return (
        <div>
            <Spinner className="m-4 text-info" animation="border" role="status" />
            <p className="text-info">{props.text}</p>
        </div>
    )
}

export default LoadSpinner
