import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadSpinner = (props) => {
    return (
        <>
            <Spinner className="m-4 text-info" animation="border" role="status" />
            <p className="text-info">{props.text}</p>
        </>
    )
}

export default LoadSpinner
