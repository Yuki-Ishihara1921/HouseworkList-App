import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'
import { Envelope, Key } from 'react-bootstrap-icons'
import { TextInput, ClickButton, LoadSpinner } from '../UIkit'
import { signIn } from '../../reducks/users/operations'

const SignIn = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const isLoading = selector.loading.isLogin
    const [email, setEmail] = useState(""),
          [password, setPassword] = useState("")

    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
    }, [setEmail])

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [setPassword])

    return (
        <>
            {isLoading && (
                <div className="loading__container text-info">
                    <LoadSpinner />
                </div>
            )}
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
        </>
    )
}

export default SignIn
