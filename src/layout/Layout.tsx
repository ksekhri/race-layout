import React from 'react'
import { RaceContextProvider } from '../race-context'
import { PrizePool } from './components/PrizePool'
import { Background } from './components/Background'
import { Commentators } from './components/Commentators'
// import { Racers } from './components/Racers'
import { useOffsetSize } from '../hooks'
import { LayoutContextProvider } from './layout-context'

export const LayoutWindow = () => {
    const ref = React.useRef(null)
    const containerOffsetSize = useOffsetSize(ref)

    return (
        <LayoutContextProvider containerOffsetSize={containerOffsetSize}>
            <div className="relative w-full h-auto" ref={ref}>
                <Background />
                <PrizePool />
                <Commentators />
                {/* <Racers /> */}
            </div>
        </LayoutContextProvider>
    )
}

export const Layout = () => {
    return (
        <RaceContextProvider>
            <LayoutWindow />
        </RaceContextProvider>
    )
}
