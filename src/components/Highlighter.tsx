import React from 'react'
import { useRaceContext } from '../race-context'
import { SparklesIcon as Sparkle } from '@heroicons/react/24/outline'
import { SparklesIcon as SparkleFilled } from '@heroicons/react/24/solid'

export const Highlighter = ({ racerId }: { racerId: string }) => {
    const { highlightedRacerId, setHighlightedRacer } = useRaceContext()

    const isHighlighed = racerId !== '' && highlightedRacerId === racerId

    const onClick = () => racerId && setHighlightedRacer(racerId)

    return (
        <button onClick={onClick}>
            {isHighlighed ? (
                <SparkleFilled width={20} />
            ) : (
                <Sparkle width={20} />
            )}
        </button>
    )
}
