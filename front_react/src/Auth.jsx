import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listenAuthState } from './reducks/users/operations'

const Auth = ({children}) => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const isSignedIn = selector.users.isSignedIn

    useEffect(() => {
        if (!isSignedIn) {
            dispatch(listenAuthState())
        }
    }, [])

    if (!isSignedIn) {
        return <></>
    } else {
        return children
    }
}

export default Auth
