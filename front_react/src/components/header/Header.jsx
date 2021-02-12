import React from 'react'
import { useSelector } from 'react-redux'
import UserInfo from './UserInfo'
import AppExplanation from './AppExplanation'

const Header = () => {
    const selector = useSelector((state) => state)
    const isSignedIn = selector.users.isSignedIn

    return (
        <header className="fixed-top px-2 py-1 border-bottom bg-light">
            <div className="d-flex">
                <span className="header__appName">Housework List</span>
                {isSignedIn && (
                    <div className="d-flex ms-auto">
                        <UserInfo />
                        <AppExplanation />
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
