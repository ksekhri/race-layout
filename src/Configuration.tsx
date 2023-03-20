import React from 'react'
import { RaceContextProvider } from './race-context'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Content } from './components/Content'

export function Configuration() {
    return (
        <RaceContextProvider>
            <Header page="dashboard" />
            <Content />
            <Footer />
        </RaceContextProvider>
    )
}
