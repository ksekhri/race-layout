import React from 'react'
import { RaceContextProvider } from '../race-context'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Content } from './components/Content'

export const LayoutEditor = () => {
    return (
        <div>
            <RaceContextProvider>
                <Header page="layout-editor" />
                <Content />
                <Footer />
            </RaceContextProvider>
        </div>
    )
}
