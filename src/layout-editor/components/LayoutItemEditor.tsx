import React from 'react'
import { LayoutItemRadio } from '../../components/LayoutItemRadio'

export const LayoutItemEditor = ({
    onAddLayout,
}: {
    onAddLayout: () => void
}) => {
    return (
        <div>
            <h2>Layout Item</h2>
            <LayoutItemRadio />
            <div className="btn-row">
                <button disabled className="btn" onClick={() => onAddLayout()}>
                    Add New Layout...
                </button>
            </div>
        </div>
    )
}
