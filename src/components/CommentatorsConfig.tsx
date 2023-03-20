import React from 'react'
import { useRaceContext } from '../race-context'

export const CommentatorsConfig = () => {
    const { commentators, setCommentators } = useRaceContext()
    const [updatedCommentators, setUpdatedCommentators] = React.useState('')

    return (
        <div>
            <h1>Commentators</h1>
            <h3>Commentators are: {commentators}</h3>
            <input
                type="text"
                name="commentators"
                placeholder="Commentators"
                id=""
                value={updatedCommentators}
                onChange={(event) => setUpdatedCommentators(event.target.value)}
            />
            <button
                onClick={() => {
                    setCommentators(updatedCommentators)
                }}
            >
                Set Commentators
            </button>
        </div>
    )
}
