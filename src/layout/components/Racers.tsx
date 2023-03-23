import React from 'react'
import filter from 'lodash/filter'
import { useRaceContextState } from '../../race-context'
import { Text } from './Text'

export const Racers = () => {
    const {
        getRacer,
        activeRacers,
        highlightedRacerId,
        activeLayout: {
            positions: { racers: racerPositions, highlight },
        },
    } = useRaceContextState()

    // const layoutHasHighlight = highlight.length > 0
    const visibleRacers = activeRacers.filter((id) => id !== '')
    // .filter((id) => !layoutHasHighlight || id !== highlightedRacerId)

    return (
        <>
            {racerPositions
                .slice(0, visibleRacers.length)
                .map((positions, index) => (
                    <Text
                        key={getRacer(activeRacers[index]).name}
                        // text={`${getRacer(activeRacers[index]).name} (${
                        //     getRacer(activeRacers[index]).pb
                        // })`}
                        text={getRacer(activeRacers[index]).name}
                        positions={positions}
                    />
                ))}
        </>
    )
}
