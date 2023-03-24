import React from 'react'
import map from 'lodash/map'
import { useRaceContext } from '../race-context'

export const RemoveRacer = ({ className }: { className?: string }) => {
    const [racerId, setRacerId] = React.useState('')
    const { racers, getRacer, activeRacers, setActiveRacer, removeRacer } =
        useRaceContext()
    const activeRacer = getRacer(racerId)

    return (
        <div className={className}>
            <h3>Remove Racer Permanently</h3>
            <select
                name="racer"
                value={racerId}
                onChange={(event) => {
                    setRacerId(event.target.value)
                }}
            >
                <option value="">Select Racer</option>
                {map(racers, ({ name }, id) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>
            {racerId && (
                <button
                    className="btn"
                    onClick={() => {
                        if (
                            window.confirm(
                                `Are you sure you want to remove ${activeRacer.name}'s information permanently?`
                            )
                        ) {
                            removeRacer(racerId)
                        }
                    }}
                >
                    Remove Permanently
                </button>
            )}
        </div>
    )
}
