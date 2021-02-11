import React from 'react'
import { SignIn, SignUp } from '../components/auth'

const PageAuth = () => {
    return (
        <section>
            <h5 className="p-3 bg-success text-white">ユーザーログイン</h5>
            <div className="m-5">
                <SignIn />
                <SignUp />
            </div>
        </section>
    )
}

export default PageAuth
