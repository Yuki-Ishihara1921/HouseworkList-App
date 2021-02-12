import React, { useState, useCallback } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap'
import { PersonCircle, Envelope, Key } from 'react-bootstrap-icons'
import { TextInput, ClickButton } from '../UIkit'
import { signUp } from '../../reducks/users/operations'
import { validateEmail, validatePassword } from '../../functions/validates'

const SignUp = () => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false),
          [username, setUsername] = useState(""),
          [email, setEmail] = useState(""),
          [password, setPassword] = useState(""),
          [confirmPassword, setConfirmPassword] = useState(""),
          [emailMessage, setEmailMessage] = useState(""),
          [passwordMessage, setPasswordMessage] = useState(""),
          [confirmPasswordMessage, setConfirmPasswordMessage] = useState("")

    const inputUsername = useCallback((e) => {
        setUsername(e.target.value)
    }, [setUsername])

    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
        setEmailMessage(validateEmail(e.target.value))
    }, [setEmail])

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
        setPasswordMessage(validatePassword(e.target.value))
    }, [setPassword])

    const inputConfirmPassword = useCallback((e) => {
        setConfirmPassword(e.target.value)
        setConfirmPasswordMessage(validatePassword(e.target.value))
    }, [setConfirmPassword])


    return (
        <div className="m-3">
            <div className="text-center">
                <a href="#" onClick={() => setIsOpen(true)}>アカウント登録はこちら</a>
            </div>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <section className="signUp">
                    <h4 className="text-headline">アカウント登録</h4>
                    <Form className="signUp__container">
                        <TextInput
                            label={"ユーザー名"} icon={<PersonCircle />}
                            type={"text"} onChange={inputUsername}
                        />
                        <TextInput
                            label={"メールアドレス"} icon={<Envelope />}
                            type={"email"} onChange={inputEmail}
                        />
                        <p className="text-danger">{emailMessage}</p>
                        <TextInput
                            label={"パスワード"} icon={<Key />}
                            type={"password"} onChange={inputPassword}
                        />
                        <p className="text-danger">{passwordMessage}</p>
                        <TextInput
                            label={"パスワード(確認用)"} icon={<Key />}
                            type={"password"} onChange={inputConfirmPassword}
                        />
                        <p className="text-danger">{confirmPasswordMessage}</p>
                        <div className="m-4 text-center">
                            <ClickButton
                                variant={"primary"} label={"登録"}
                                onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
                            />
                        </div>
                    </Form>
                </section>
            </Modal>
        </div>
    )
}

export default SignUp
