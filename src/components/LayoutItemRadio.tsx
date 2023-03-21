import React from 'react'
import map from 'lodash/map'
import { useRaceContext } from '../race-context'
import { Layout } from './Layout'

export const LayoutItemRadio = () => {
    const { activeLayoutId, selectedLayoutCollection } = useRaceContext()

    return (
        <div>
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
