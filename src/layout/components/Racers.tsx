import React from 'react'
import filter from 'lodash/filter'
import { useRaceContextState } from '../../context'

export const Racers = () => {
    const { racers, highlightedRacerId } = useRaceContextState()

    const nonHighlightedRacers = filter(
        racers,
        (_, racerId) => racerId !== highlightedRacerId
    )

    return (
        <div>
            {nonHighlightedRacers.map(({ name, pb }) => (
                <>
                    <div>
                        {name}
                        {pb}
                    </div>
                </>
            ))}
        </div>
    )
}
