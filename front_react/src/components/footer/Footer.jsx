import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'
import { TaskEdit } from '../tasks'
import Modal from 'react-modal'
import { ButtonClick } from '../UIkit'

const Footer = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const isSignedIn = selector.users.isSignedIn
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {isSignedIn && (
                <footer className="fixed-bottom">
                    <ButtonClick
                        className={"col-5"} label={"今日のタスク"} variant={"primary"}
                        onClick={() => dispatch(push('/'))}
                    />
                    <ButtonClick
                        className={"col-2"} label={"New"} variant={"secondary"}
                        onClick={() => setIsOpen(true)}
                    />
                    <ButtonClick
                        className={"col-5"} label={"タスク一覧"} variant={"info"}
                        onClick={() => dispatch(push('/tasklist'))}
                    />
                    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                        <TaskEdit id={""} label={"作成"} onClose={() => setIsOpen(false)} />
                    </Modal>
                </footer>
            )}
        </>
    )
}

export default Footer
