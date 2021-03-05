import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../../reducks/users/operations'
import { ButtonClick, LoadSpinner, TextInput } from '../UIkit'
import { Form } from 'react-bootstrap'
import { Envelope, Key } from 'react-bootstrap-icons'

const SignIn = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const isLoading = selector.loading.isSignIn
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
                <div className="loading__container">
                    <LoadSpinner text={"ログイン中..."} />
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
                    <ButtonClick
                        label={"ログイン"} variant={"success"}
                        onClick={() => dispatch(signIn(email, password))}
                    />
                </div>
            </Form>
        </>
    )
}

export default SignIn
