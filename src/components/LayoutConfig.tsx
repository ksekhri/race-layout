import React from 'react'
import map from 'lodash/map'
import { useRaceContext } from '../race-context'
import { LAYOUTS } from '../layouts'
import { Layout } from './Layout'

export const LayoutConfig = () => {
    const {
        selectedLayoutCollectionId,
        activeLayoutId,
        setLayout,
        selectedLayoutCollection,
    } = useRaceContext()

    return (
        <div>
            <h1>Layout</h1>
            <h3>Current Layout is: {selectedLayoutCollection.name}</h3>
            <select
                name="layout"
                id="layout"
                value={selectedLayoutCollectionId}
                onChange={(event) => {
                    setLayout(event.target.value)
                }}
            >
                {map(LAYOUTS, ({ name }, id) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>
            {map(selectedLayoutCollection.layouts, (layoutItem) => (
                <Layout
                    key={layoutItem.name}
                    layout={layoutItem}
                    activeLayoutId={activeLayoutId}
                    parentName={selectedLayoutCollection.name}
                />
            ))}
        </div>
    )
}
