import React from 'react'
import { useRaceContext } from '../../../race-context'
import { LayoutCollectionSelector } from '../../../components/LayoutCollectionSelector'

const positiveInteger = /^\d+$/

export const DuplicateLayoutCollection = ({
    cancelAdding,
}: {
    cancelAdding: () => void
}) => {
    const { duplicateLayoutCollection } = useRaceContext()
    const [collectionName, setCollectionName] = React.useState('')
    const disabled = collectionName.length === 0

    return (
        <div>
            <h2>Duplicate Layout Collection</h2>
            <h3>Existing Collection To Copy</h3>
            <LayoutCollectionSelector />
            <input
                type="text"
                placeholder="New Collection Name"
                value={collectionName}
                onChange={(event) => {
                    setCollectionName(event.target.value)
                }}
            />
            <div className="mt-4">
                <button
                    className="btn"
                    disabled={disabled}
                    onClick={() => {
                        duplicateLayoutCollection(collectionName)
                        cancelAdding()
                    }}
                >
                    Duplicate Collection
                </button>
                <button
                    className="btn-secondary ml-6"
                    onClick={() => cancelAdding()}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}
