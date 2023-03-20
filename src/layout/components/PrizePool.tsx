import React from 'react'
import { useRaceContextState } from '../../race-context'

export const PrizePool = () => {
    const { prizePool } = useRaceContextState()
    return <div className="absolute">{prizePool.toFixed(2)}</div>
}
