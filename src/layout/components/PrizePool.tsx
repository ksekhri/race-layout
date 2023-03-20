import React from 'react'
import { useRaceContextState } from '../../race-context'
import { Text } from './Text'

export const PrizePool = () => {
    const {
        prizePool,
        activeLayout: {
            positions: { prizePool: prizePoolPositions },
        },
    } = useRaceContextState()

    if (!prizePool) {
        return null
    }

    return (
        <Text
            text={`$${prizePool.toFixed(2)}`}
            positions={prizePoolPositions}
        />
    )
}
