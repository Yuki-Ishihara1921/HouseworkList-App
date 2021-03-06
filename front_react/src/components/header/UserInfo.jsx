import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../reducks/users/operations'
import { Dropdown } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons'

const UserInfo = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const username = selector.users.username

    return (
        <>
            <Dropdown className="m-auto">
                <Dropdown.Toggle variant="info" size="sm">
                    <PersonCircle className="fs-4" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="text-center">
                    <Dropdown.Item disabled>{username}</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="text-primary" onClick={() => dispatch(signOut())}>
                        ログアウト
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default UserInfo
