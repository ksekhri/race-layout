import React from 'react'
import map from 'lodash/map'
import { useRaceContext } from '../race-context'
import { LAYOUTS } from '../layouts'

export const LayoutCollectionSelector = () => {
    const {
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
                {map(LAYOUTS, ({ name }, id) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    )
}
