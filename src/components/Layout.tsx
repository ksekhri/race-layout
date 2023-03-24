import React from 'react'
import { useRaceContext } from '../race-context'
import * as Types from '../types'

export const Layout = ({
    layout,
    activeLayoutId,
    parentName,
}: {
    layout: Types.Layout
    activeLayoutId: string
    parentName: string
}) => {
    const { setActiveLayoutId } = useRaceContext()

    const id = `layoutradio-${layout.name}`

    return (
        <div>
            <input
                type="radio"
                id={id}
                value={layout.name}
                name={parentName}
                checked={activeLayoutId === layout.name}
                onChange={(event) => {
                    if (event.target.checked) {
                        setActiveLayoutId(layout.name)
                    }
                }}
            />
            <label htmlFor={id}>{layout.name}</label>
        </div>
    )
}
