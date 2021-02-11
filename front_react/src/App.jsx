import React from 'react'
import Router from './Router'
import { Header } from './components/header'
import { Footer } from './components/footer'

const App = () => {
    return (
        <>
            <Header />
            <main className="mt-5">
                <Router />
            </main>
            <Footer />
        </>
    )
}

export default App