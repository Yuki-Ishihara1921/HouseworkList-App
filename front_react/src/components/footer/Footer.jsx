import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'
import { TaskEdit } from '../tasks'
import { Button } from 'react-bootstrap'
import Modal from 'react-modal'

const Footer = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const isSignedIn = selector.users.isSignedIn
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {isSignedIn && (
                <footer className="fixed-bottom">
                    <Button
                        className="col-5" variant="primary"
                        onClick={() => dispatch(push('/'))}
                    >
                        今日のタスク
                    </Button>
                    <Button
                        className="col-2" variant="secondary"
                        onClick={() => setIsOpen(true)}
                    >
                        New
                    </Button>
                    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                        <TaskEdit id={""} label={"作成"} onClose={() => setIsOpen(false)} />
                    </Modal>
                    <Button
                        className="col-5" variant="info"
                        onClick={() => dispatch(push('/tasklist'))}
                    >
                        タスク一覧
                    </Button>
                </footer>
            )}
        </>
    )
}

export default Footer
