import React from 'react'
import { useTimeLeft } from '../../hooks'
import { useRaceContextState } from '../../race-context'
import { Text } from './Text'

export const TimeLeft = () => {
    const {
        raceLength,
        activeLayout: {
            positions: { timeLeft: timeLeftPositions },
        },
    } = useRaceContextState()

    if (!timeLeftPositions.flag) {
        // return null
    }

    const timeLeft = useTimeLeft()

    return <Text text={timeLeft} positions={timeLeftPositions} />
}
