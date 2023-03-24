import React from 'react'
import { useRaceContext } from '../race-context'
import { SparklesIcon as Sparkle } from '@heroicons/react/24/outline'
import { SparklesIcon as SparkleFilled } from '@heroicons/react/24/solid'

export const Highlighter = ({
    racerId,
    className,
}: {
    racerId: string
    className?: string
}) => {
    const { highlightedRacerId, setHighlightedRacer } = useRaceContext()

    const isHighlighed = racerId !== '' && highlightedRacerId === racerId

    const onClick = () => racerId && setHighlightedRacer(racerId)

    return (
        <button onClick={onClick}>
            {isHighlighed ? (
                <SparkleFilled className={className} width={20} />
            ) : (
                <Sparkle className={className} width={20} />
            )}
        </button>
    )
}
