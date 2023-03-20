import React from 'react'
import { useRaceContext } from '../context'
import * as Types from '../types'

export const Layout = ({
    layout,
    activeLayout,
    parentName,
}: {
    layout: Types.Layout
    activeLayout: string
    parentName: string
}) => {
    const { setActiveLayout } = useRaceContext()

    const id = `layoutradio-${layout.name}`

    return (
        <div>
            <input
                type="radio"
                id={id}
                value={layout.name}
                name={parentName}
                checked={activeLayout === layout.name}
                onChange={(event) => {
                    if (event.target.checked) {
                        setActiveLayout(layout.name)
                    }
                }}
            />
            <label htmlFor={id}>{layout.name}</label>
        </div>
    )
}
