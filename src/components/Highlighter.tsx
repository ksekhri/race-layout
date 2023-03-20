import React from 'react'
import { useRaceContext } from '../race-context'
import { SparklesIcon as Sparkle } from '@heroicons/react/24/outline'
import { SparklesIcon as SparkleFilled } from '@heroicons/react/24/solid'

export const Highlighter = ({ racerId }: { racerId: string }) => {
    const { highlightedRacerId, setHighlightedRacer } = useRaceContext()

    const isHighlighed = racerId !== '' && highlightedRacerId === racerId

    return (
        <div>
            {isHighlighed ? (
                <SparkleFilled
                    onClick={() => setHighlightedRacer('')}
                    width={20}
                />
            ) : (
                <Sparkle
                    onClick={() => racerId && setHighlightedRacer(racerId)}
                    width={20}
                />
            )}
        </div>
    )
}
