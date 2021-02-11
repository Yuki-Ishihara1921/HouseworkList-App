import React from 'react'
import { Switch, Route } from 'react-router'
import Auth from './Auth'
import { PageAuth, PageTop, PageList } from './pages'

const Router = () => {
    return (
        <Switch>
            <Route exact path={'/signin'} component={PageAuth} />
            <Auth>
                <Route exact path={'(/)?'} component={PageTop} />
                <Route exact path={'/tasklist'} component={PageList} />
            </Auth>
        </Switch>
    )
}

export default Router
