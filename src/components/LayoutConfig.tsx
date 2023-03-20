import React from 'react'
import map from 'lodash/map'
import { useRaceContext } from '../context'
import { LAYOUTS } from '../layouts'
import { Layout } from './Layout'

export const LayoutConfig = () => {
    const { layout, activeLayout, setLayout, layoutData } = useRaceContext()

    return (
        <div>
            <h1>Layout</h1>
            <h3>Current Layout is: {layoutData.name}</h3>
            <select
                name="layout"
                id="layout"
                value={layout}
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
            {map(layoutData.layouts, (layoutItem) => (
                <Layout
                    key={layoutItem.name}
                    layout={layoutItem}
                    activeLayout={activeLayout}
                    parentName={layoutData.name}
                />
            ))}
        </div>
    )
}
