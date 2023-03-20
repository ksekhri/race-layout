import React from 'react'
import map from 'lodash/map'
import { useRaceContext } from '../context'

export const RemoveRacer = ({}: {}) => {
    const [racerId, setRacerId] = React.useState('')
    const { racers, getRacer, activeRacers, setActiveRacer, removeRacer } =
        useRaceContext()
    const activeRacer = getRacer(racerId)

    return (
        <div>
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