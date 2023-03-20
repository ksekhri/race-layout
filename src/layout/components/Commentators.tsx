import React from 'react'
import { useRaceContextState } from '../../context'

export const Commentators = () => {
    const { commentators } = useRaceContextState()
    return <div>{commentators}</div>
}
