import React from 'react'
import Router from './Router'
import { Header } from './components/header'
import { Footer } from './components/footer'

const App = () => {
    return (
        <>
            <Header />
            <main className="app-main">
                <Router />
            </main>
            <Footer />
        </>
    )
}

export default App