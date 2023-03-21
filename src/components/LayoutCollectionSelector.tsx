import React from 'react'
import map from 'lodash/map'
import { useRaceContext } from '../race-context'

export const LayoutCollectionSelector = () => {
    const {
        layoutLibrary,
        selectedLayoutCollectionId,
        setLayoutCollectionId,
        selectedLayoutCollection,
    } = useRaceContext()

    return (
        <div>
            <h3>Current Layout Collection: {selectedLayoutCollection.name}</h3>
            <select
                name="layout"
                id="layout"
                value={selectedLayoutCollectionId}
                onChange={(event) => {
                    setLayoutCollectionId(event.target.value)
                }}
            >
                {map(layoutLibrary, ({ name }, id) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    )
}
