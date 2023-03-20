import React from 'react'
import { useRaceContext } from '../race-context'
import { AddNewRacer } from './AddNewRacer'
import { ActiveRacer } from './ActiveRacer'
import { RemoveRacer } from './RemoveRacer'

export const RacerConfig = () => {
    const { activeRacers, getRacer, selectedLayoutCollection } =
        useRaceContext()

    return (
        <div>
            <h2>Racers</h2>
            <h3>
                Active Racers Are:{' '}
                {activeRacers
                    .map((racerId) => getRacer(racerId).name)
                    .slice(0, selectedLayoutCollection.racers)
                    .join(', ')}
            </h3>
            <h3>Update Racers</h3>
            {activeRacers
                .slice(0, selectedLayoutCollection.racers)
                .map((activeRacer, index) => (
                    <ActiveRacer
                        key={`${index}${activeRacer}`}
                        activeRacerId={activeRacer}
                        index={index}
                    />
                ))}
            <AddNewRacer />
            <RemoveRacer />
        </div>
    )
}
