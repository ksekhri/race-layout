import React from 'react'
import { useRaceContextState } from '../../context'

export const Background = () => {
    const { layout } = useRaceContextState()
    return <div>{layout}</div>
}
