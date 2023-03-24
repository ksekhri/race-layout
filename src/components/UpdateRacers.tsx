import React from 'react'
import { useRaceContext } from '../race-context'
import { ActiveRacer } from './ActiveRacer'

export const UpdateRacers = () => {
    const { activeRacers, selectedLayoutCollection, places, updatePlace } =
        useRaceContext()

    return (
        <div>
            {activeRacers
                .slice(0, selectedLayoutCollection.racers)
                .map((activeRacer, index) => (
                    <ActiveRacer
                        key={`${index}${activeRacer}`}
                        className="mb-2"
                        activeRacerId={activeRacer}
                        index={index}
                        place={places[index]}
                        setPlace={(updatedPlace: number) => {
                            updatePlace({ updatedPlace, index })
                        }}
                    />
                ))}
        </div>
    )
}
