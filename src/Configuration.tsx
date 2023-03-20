import React from 'react'
import { RaceContextProvider } from './context'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Content } from './components/Content'

export function Configuration() {
    return (
        <RaceContextProvider>
            <Header />
            <Content />
            <Footer />
        </RaceContextProvider>
    )
}