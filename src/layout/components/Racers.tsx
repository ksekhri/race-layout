import React from 'react'
import filter from 'lodash/filter'
import { useRaceContextState } from '../../race-context'

export const Racers = () => {
    const { racers, highlightedRacerId } = useRaceContextState()

    const nonHighlightedRacers = filter(
        racers,
        (_, racerId) => racerId !== highlightedRacerId
    )

    return (
        <div className="absolute">
            {nonHighlightedRacers.map(({ name, pb }) => (
                <div key={name}>
                    {name}
                    {pb}
                </div>
            ))}
        </div>
    )
}
