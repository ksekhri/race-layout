import React from 'react'
import { getTimeStringFromMS, useTimeLeft } from '../hooks'
import { useRaceContext } from '../race-context'
import { PositiveIntInput } from './PositiveIntInput'

export const TimerConfig = () => {
    const { startEpoch, raceLength, setStartEpoch, setRaceLength } =
        useRaceContext()
    const timeLeft = useTimeLeft()
    const [minutes, setMinutes] = React.useState('')

    return (
        <div>
            <h2>Timer</h2>
            <h3>Time Left: {timeLeft}</h3>

            <div className="flex">
                <button
                    className="btn"
                    onClick={() => setStartEpoch(new Date().getTime())}
                >
                    Start Timer
                </button>
                <button
                    className="btn-secondary ml-2"
                    onClick={() => setStartEpoch(0)}
                >
                    Reset Timer
                </button>
            </div>
            <h3 className="mt-4">
                Race Length: {getTimeStringFromMS(raceLength)} (h:m:s)
            </h3>
            <PositiveIntInput
                // className="w-28"
                type="text"
                name="minutes"
                placeholder="Mins to Race"
                value={minutes}
                onChange={(event) => setMinutes(event.target.value)}
            />
            <div className="flex">
                <button
                    disabled={minutes === ''}
                    className="btn mt-2"
                    onClick={() =>
                        minutes !== '' &&
                        setRaceLength(parseInt(minutes) * 1000 * 60)
                    }
                >
                    Set Length
                </button>
                {/* <button
                    className="btn-secondary ml-2"
                    onClick={() => {
                        setRaceLength(0)
                        setStartEpoch(0)
                    }}
                >
                    Clear
                </button> */}
            </div>
        </div>
    )
}
