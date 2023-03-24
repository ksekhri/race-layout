import React from 'react'
import { useRaceContextState } from '../../race-context'
import { Text } from './Text'

export const Racers = () => {
    const {
        getRacer,
        activeRacers,
        highlightedRacerId,
        selectedLayoutCollection,
        activeLayout: {
            positions: { racers: racerPositions, highlight },
        },
    } = useRaceContextState()

    const layoutHasHighlight = highlight.length > 0
    const visibleRacers = activeRacers
        .filter(
            (id) =>
                id !== '' && (!layoutHasHighlight || id !== highlightedRacerId)
        )
        .slice(0, selectedLayoutCollection.racers - highlight.length)

    return (
        <>
            {racerPositions
                .slice(0, visibleRacers.length)
                .map((positions, index) => (
                    <Text
                        key={getRacer(visibleRacers[index]).name}
                        text={getRacer(visibleRacers[index]).name}
                        positions={positions}
                    />
                ))}
            {highlight.length > 0 && (
                <Text
                    text={getRacer(highlightedRacerId).name}
                    positions={highlight[0]}
                />
            )}
        </>
    )
}
