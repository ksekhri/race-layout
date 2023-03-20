import React from 'react'
import { useRaceContextState } from '../../race-context'

export const Background = () => {
    const { activeLayout } = useRaceContextState()

    return (
        <img className="w-full h-auto" src={activeLayout.background} alt="" />
    )
}
