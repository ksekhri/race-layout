import React from 'react'
import { useRaceContextState } from '../../race-context'
import { Text } from './Text'

export const Places = () => {
    const {
        getRacer,
        activeRacers,
        activeLayout: {
            positions: { places: placePositions },
        },
        places,
        selectedLayoutCollection,
    } = useRaceContextState()

    const racerAndPlace = activeRacers
        .slice(0, selectedLayoutCollection.racers)
        .map((racerId, index) => ({ racerId, place: places[index] }))

    return (
        <>
            {placePositions.map((position, index) => {
                const racerToDisplay = racerAndPlace.find(
                    ({ place }) => place === index + 1
                )
                return (
                    racerToDisplay && (
                        <Text
                            key={getRacer(racerToDisplay.racerId).name}
                            text={getRacer(racerToDisplay.racerId).name}
                            positions={position}
                        />
                    )
                )
            })}
        </>
    )
}
