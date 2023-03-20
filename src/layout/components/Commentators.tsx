import React from 'react'
import { useRaceContextState } from '../../race-context'
import { Text } from './Text'

export const Commentators = () => {
    const {
        commentators,
        activeLayout: {
            positions: { commentators: commentatorPositions },
        },
    } = useRaceContextState()

    return <Text text={commentators} positions={commentatorPositions} />
}
