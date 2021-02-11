import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons'
import { signOut } from '../../reducks/users/operations'

const UserInfo = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const username = selector.users.username

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="info">
                    <PersonCircle className="fs-4" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="text-center">
                    <Dropdown.Item className="text-primary" disabled>{username}</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => dispatch(signOut())}>ログアウト</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default UserInfo
