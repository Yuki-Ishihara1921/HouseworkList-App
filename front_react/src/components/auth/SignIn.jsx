import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap'
import { Envelope, Key } from 'react-bootstrap-icons'
import { TextInput, ClickButton } from '../UIkit'
import { signIn } from '../../reducks/users/operations'

const SignIn = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState(""),
          [password, setPassword] = useState("")

    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
    }, [setEmail])

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [setPassword])

    return (
        <Form className="signIn">
            <TextInput
                label={"メールアドレス"} icon={<Envelope />}
                type={"email"} onChange={inputEmail}
            />
            <TextInput
                label={"パスワード"} icon={<Key />}
                type={"password"} onChange={inputPassword}
            />
            <div className="m-4 text-center">
                <ClickButton variant={"success"} onClick={() => dispatch(signIn(email, password))} label={"ログイン"} />
            </div>
        </Form>
    )
}

export default SignIn
