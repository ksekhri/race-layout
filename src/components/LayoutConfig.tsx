import React from 'react'
import { LayoutCollectionSelector } from './LayoutCollectionSelector'
import { LayoutItemRadio } from './LayoutItemRadio'

export const LayoutConfig = () => {
    return (
        <div>
            <h2>Layout Collection</h2>
            <LayoutCollectionSelector />
            <LayoutItemRadio />
        </div>
    )
}
