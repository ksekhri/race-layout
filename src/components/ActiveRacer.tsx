import React from 'react'
import map from 'lodash/map'
import { useRaceContext } from '../race-context'
import { Highlighter } from './Highlighter'

export const ActiveRacer = ({
    activeRacerId,
    index,
}: {
    activeRacerId: string
    index: number
}) => {
    const { racers, getRacer, activeRacers, setActiveRacer, updateRacer } =
        useRaceContext()
    const activeRacer = getRacer(activeRacerId)
    const [time, setTime] = React.useState(activeRacer.time)
    const [pb, setPb] = React.useState(activeRacer.pb)

    React.useEffect(() => {
        setTime(activeRacer.time)
        setPb(activeRacer.pb)
    }, [activeRacers, racers])

    const dirty = time !== activeRacer.time || pb !== activeRacer.pb

    return (
        <div>
            <Highlighter racerId={activeRacer.name} />
            <select
                name="racer"
                value={activeRacerId}
                onChange={(event) => {
                    setActiveRacer(event.target.value, index)
                }}
            >
                <option value="">Select Racer</option>
                {map(racers, ({ name }, id) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>
            <input
                type="text"
                value={time}
                placeholder="time"
                onChange={(event) => setTime(event.target.value)}
            />
            <input
                type="text"
                value={pb}
                placeholder="pb"
                onChange={(event) => setPb(event.target.value)}
            />
            {dirty && (
                <button
                    onClick={() => {
                        updateRacer({ name: activeRacer.name, time, pb })
                    }}
                >
                    Update racer
                </button>
            )}
        </div>
    )
}
