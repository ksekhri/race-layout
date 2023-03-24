import React from 'react'
import cn from 'classnames'
import map from 'lodash/map'
import { useRaceContext } from '../race-context'
import { Highlighter } from './Highlighter'

export const ActiveRacer = ({
    activeRacerId,
    index,
    place,
    setPlace,
    className,
}: {
    activeRacerId: string
    index: number
    place: number
    setPlace: (updatedPlace: number) => void
    className?: string
}) => {
    const {
        racers,
        getRacer,
        activeRacers,
        setActiveRacer,
        updateRacer,
        selectedLayoutCollection,
    } = useRaceContext()
    const activeRacer = getRacer(activeRacerId)
    const [time, setTime] = React.useState(activeRacer.time)
    const [pb, setPb] = React.useState(activeRacer.pb)

    React.useEffect(() => {
        setTime(activeRacer.time)
        setPb(activeRacer.pb)
    }, [activeRacers, racers])

    const dirty = time !== activeRacer.time || pb !== activeRacer.pb

    return (
        <div className={cn('flex', className)}>
            <Highlighter className="mr-2" racerId={activeRacer.name} />
            <select
                name="racer"
                className="mr-2"
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
            <select
                value={place}
                className="mr-2"
                onChange={(event) => setPlace(parseInt(event.target.value))}
            >
                {Array(selectedLayoutCollection.racers + 1)
                    .fill(null)
                    .map((_, index) => (
                        <option key={index} value={index}>
                            {index === 0 ? '' : index}
                        </option>
                    ))}
            </select>
            <input
                type="text"
                className="mr-2"
                value={time}
                placeholder="time"
                onChange={(event) => setTime(event.target.value)}
            />
            <input
                type="text"
                className="mr-2"
                value={pb}
                placeholder="pb"
                onChange={(event) => setPb(event.target.value)}
            />
            <button
                disabled={!dirty || !activeRacer.name}
                className="btn"
                onClick={() => {
                    updateRacer({ name: activeRacer.name, time, pb })
                }}
            >
                Update
            </button>
        </div>
    )
}
