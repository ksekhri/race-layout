import React from 'react'
import { RaceContextProvider } from '../race-context'
import { PrizePool } from './components/PrizePool'
import { Background } from './components/Background'
import { Commentators } from './components/Commentators'
import { Racers } from './components/Racers'
import { useOffsetSize } from '../hooks'
import { LayoutContextProvider } from './layout-context'
import { Places } from './components/Places'
import { TimeLeft } from './components/TimeLeft'

export const LayoutWindow = () => {
    const [refresh, setRefresh] = React.useState(false)
    React.useEffect(() => {
        if (refresh) {
            setRefresh(false)
        }
    }, [refresh])
    const ref = React.useRef(null)
    const containerOffsetSize = useOffsetSize(ref)

    return (
        <LayoutContextProvider containerOffsetSize={containerOffsetSize}>
            {!refresh && (
                <div
                    className="relative w-full h-auto cursor-pointer"
                    ref={ref}
                    onClick={() => setRefresh(true)}
                >
                    <Background title="Click to refresh layout" />
                    <PrizePool />
                    <Commentators />
                    <Racers />
                    <Places />
                    <TimeLeft />
                </div>
            )}
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
