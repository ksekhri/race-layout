import React from 'react'
import { useRaceContext } from '../context'
import { AddNewRacer } from './AddNewRacer'
import { ActiveRacer } from './ActiveRacer'
import { RemoveRacer } from './RemoveRacer'

export const RacerConfig = () => {
    const { activeRacers, getRacer, layoutData } = useRaceContext()

    return (
        <div>
            <h1>Racers</h1>
            <h3>
                Active Racers Are:{' '}
                {activeRacers
                    .map((racerId) => getRacer(racerId).name)
                    .slice(0, layoutData.racers)
                    .join(', ')}
            </h3>
            <h3>Update Racers</h3>
            {activeRacers
                .slice(0, layoutData.racers)
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
