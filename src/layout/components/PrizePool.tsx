import React from 'react'
import { useRaceContextState } from '../../context'

export const PrizePool = () => {
    const { prizePool } = useRaceContextState()
    return <div>{prizePool.toFixed(2)}</div>
}
