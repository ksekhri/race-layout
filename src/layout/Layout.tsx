import React from 'react'
import { RaceContextProvider } from '../context'
import { PrizePool } from './components/PrizePool'
import { Background } from './components/Background'
import { Commentators } from './components/Commentators'
import { Racers } from './components/Racers'

export function Layout() {
    return (
        <RaceContextProvider>
            <Background />
            <PrizePool />
            <Commentators />
            <Racers />
        </RaceContextProvider>
    )
}
