import React from 'react'
import { useRaceContext } from '../race-context'

export const CommentatorsConfig = () => {
    const { commentators, setCommentators } = useRaceContext()
    const [updatedCommentators, setUpdatedCommentators] = React.useState('')

    return (
        <div>
            <h2>Commentators</h2>
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
                className="btn"
                onClick={() => {
                    setCommentators(updatedCommentators)
                }}
            >
                Set Commentators
            </button>
        </div>
    )
}
